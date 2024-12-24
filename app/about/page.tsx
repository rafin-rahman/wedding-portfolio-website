import Image from "next/image";
import companyConfigs, { defaultBrandKey } from "@/utils/company.config";
import { headers } from "next/headers";

export default async function About() {
  // Get the x-brand header or default
  const headersList = await headers();
  const brandKey = headersList.get("x-brand")?.toLowerCase() || defaultBrandKey.toLowerCase();

  // Normalize keys in companyConfigs to lowercase
  const normalizedConfigs = Object.keys(companyConfigs).reduce((acc, key) => {
    acc[key.toLowerCase()] = companyConfigs[key];
    return acc;
  }, {} as Record<string, typeof companyConfigs[keyof typeof companyConfigs]>);

  // Resolve the brand
  const brand = normalizedConfigs[brandKey] || normalizedConfigs[defaultBrandKey.toLowerCase()];

  // Ensure brand exists
  if (!brand) {
    throw new Error(`Brand not found for key: ${brandKey}`);
  }


  return (
    <div className={"container mx-auto"}>
      <div className={"sm:flex justify-center text-center sm:text-left"}>
        <div className="sm:mt-60 sm:w-[50%]">
          <h1 className={"text-4xl"}>About </h1>
          <p className={"text-2xl"}>{brand.companyName}</p>
          <br />
          <p className={"sm:max-w-[80%] mb-10 sm:mb-0 mx-10 sm:mx-0"}>
            Welcome to {brand.companyName}! Based in London, our team specializes in
            capturing the beauty of Asian wedding events, from weddings and
            Nikah ceremonies to Mehndi nights, engagements, and couple shoots.
            With a passion for preserving your special moments, we blend
            cultural reverence with artistic flair to immortalize your
            celebrations in vivid detail.
          </p>
        </div>
        <div className={""}>
          <Image
            src="/images/background/couple in red portrait.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
