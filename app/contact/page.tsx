"use client";
import { useEffect } from "react";
import {useBrand} from "@/utils/brandContext";

export default function Contact() {
  const brand = useBrand();


  useEffect(() => {
    // creating script element
    const scriptElement = document.createElement("script");

    // setting the src
    scriptElement.src =
      "https://form.jotform.com/s/umd/latest/for-form-embed-handler.js";

    // appending the script to the body
    document.body.appendChild(scriptElement);

    // setting up the jotform
    scriptElement.onload = () => {
      //@ts-ignore
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-240946916551059']",
        "https://form.jotform.com/"
      );
    };
  }, []);
  return (
    <div className={"container mx-auto"}>
      <iframe
        id="JotFormIFrame-240946916551059"
        title="Enquiry"
        allow="geolocation; microphone; camera; fullscreen"
        src={`https://form.jotform.com/240946916551059?company=${brand.abbreviation}`}
        className={"w-full h-[1139px]"}
      ></iframe>
    </div>
  );
}
