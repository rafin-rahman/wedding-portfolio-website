import Image from "next/image";

export default function About() {
  return (
    <div className={"container mx-auto"}>
      <div className={"sm:flex justify-center text-center sm:text-left"}>
        <div className="sm:mt-60 sm:w-[50%]">
          <h1 className={"text-4xl"}>About</h1>
          <p className={"text-2xl"}>Photography Reimagined</p>
          <br />
          <p className={"sm:max-w-[80%] mb-10 sm:mb-0 mx-10 sm:mx-0"}>
            Welcome to Films Reimagined! Based in London, our team specializes in
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
