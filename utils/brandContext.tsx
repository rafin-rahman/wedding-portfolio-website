'use client'

import React, { createContext, useContext, ReactNode } from "react";

// Define the type for the Brand
export type Brand = {
    companyName: string;
    tagline: string;
    description: string;
    logo: string;
    contactEmail: string;
    incorporationYear: number;
    keywords: string[];
    facebook: string;
    x: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
};

// Create the context
const BrandContext = createContext<Brand | null>(null);

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
    value: Brand;
    children: ReactNode;
};

export const BrandProvider = ({ value, children }: BrandProviderProps) => {
    return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
};