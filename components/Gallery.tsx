import Image from "next/image";
import {useBrand} from "@/utils/brandContext";

const files = [
  {
    title: "Wedding",
    source: "/images/gallery/wedding_1.jpg",
  },
  {
    title: "Mehndi",
    source: "/images/gallery/mehendi_1.jpg",
  },
  {
    title: "Nikah",

    source: "/images/gallery/nikkah_1.jpg",
  },
  {
    title: "Engagements",

    source: "/images/gallery/engagement_1.jpg",
  }
];

export default  function Gallery() {

  const brand = useBrand();
  console.log(brand);

  return (
    <ul
      role="list"
      className="grid  gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {files.map((file) => (
        <li key={file.source} className=" ">
          <div className=" relative h-60 group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-amber-300 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Image
              src={file.source}
              alt=""
              className="pointer-events-none object-cover group-hover:opacity-75 "
              fill
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="text-center pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {file.title}
          </p>
        </li>
      ))}
    </ul>
  );
}
