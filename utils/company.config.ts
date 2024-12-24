// company.config.ts
export type CompanyConfig = {
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

export const companyConfigs: Record<string, CompanyConfig> = {
    "filmsreimagined.com": {
        companyName: "Films Reimagined",
        tagline: "Wedding films",
        description: "Asian Wedding Photography and Videography",
        logo: "filmsreimagined/logo/dark-logo.png",
        contactEmail: "contact@reimmagined.com",
        incorporationYear: 2024,
        keywords: ["photography", "videography", "wedding", "corporate"],
        facebook: "",
        x: "",
        instagram: "https://www.instagram.com/films.reimagined/",
        linkedin: "",
        youtube: "",
        tiktok: "https://www.tiktok.com/@films.reimagined",
    },
    "thehijabiphotographer.com": {
        companyName: "The Hijabi Photographer",
        tagline: "Capturing Timeless Moments",
        description: "Asian Wedding Photography and Videography",
        logo: "/images/thehijabi-logo.png",
        contactEmail: "contact@thehijabiphotographer.com",
        incorporationYear: 2024,
        keywords: ["photography", "videography", "wedding", "corporate"],
        facebook: "",
        x: "",
        instagram: "https://www.instagram.com/the_hijabi_photographer",
        linkedin: "",
        youtube: "",
        tiktok: "https://www.tiktok.com/@the.hijabi.photographer",
    },
};

// Default brand for local development
export const defaultBrandKey = "filmsreimagined";

export default companyConfigs;