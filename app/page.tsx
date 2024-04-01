"use client";
import Gallery from "@/components/Gallery";
import LineAutomated from "@/components/LineAutomated";

export default function Home() {
  return (
    <>
      <div className="p-20">
        <LineAutomated />
        <Gallery />
      </div>
    </>
  );
}
