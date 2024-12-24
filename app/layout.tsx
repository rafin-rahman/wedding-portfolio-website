import type { Metadata } from "next";
import { Inter,League_Script  } from "next/font/google";
import "./globals.css";
import { headers } from 'next/headers';
import companyConfigs, { defaultBrandKey } from '../utils/company.config';
import { BrandProvider } from "@/utils/brandContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const leagueScript = League_Script({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedding Photography & Videography",
  description: "Your wedding memories with us",
};




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // Access headers to get the brand key
  const headersList = await headers();
  const brandKey = headersList.get('x-brand') || defaultBrandKey;
  const brand = companyConfigs[brandKey];

  return (
    <html lang="en">
      <body className={inter.className}>
      <BrandProvider value={brand}>
        <div>
          <div className={"fixed z-10 top-0 pt-4 w-full bg-white"}>
            <Navbar />
          </div>
          <div className={"mb-40"}></div>
          {children}
          <Footer />
        </div>
      </BrandProvider>
      </body>
    </html>
  );
}
