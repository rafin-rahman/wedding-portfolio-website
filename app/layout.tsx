import type { Metadata } from "next";
import { Inter,League_Script  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const leagueScript = League_Script({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Films Reimagined",
  description: "Films Reimagined",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className={"fixed z-10 top-0 pt-4 w-full bg-white"}>
            <Navbar />
          </div>
          <div className={"mb-40"}></div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
