'use client'

import React, { createContext, useContext, ReactNode } from "react";
import {CompanyConfig} from "./company.config";



// Create the context
const BrandContext = createContext<CompanyConfig | null>(null);

// Custom hook to use the Brand context
export const useBrand = () => {
    const context = useContext(BrandContext);
    if (!context) {
        throw new Error("useBrand must be used within a BrandProvider");
    }
    return context;
};

// Provider component to wrap the app
type BrandProviderProps = {
    value: CompanyConfig;
    children: ReactNode;
};

export const BrandProvider = ({ value, children }: BrandProviderProps) => {
    return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
};