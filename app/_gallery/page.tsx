// "use client";
// import {useState, useEffect} from "react";
// import {ProGallery} from "pro-gallery";
// import "pro-gallery/dist/statics/main.css";
// import {MonteCarlo} from "next/font/google";
//
// const cursiveFont = MonteCarlo({weight: "400", subsets: ["latin"]});
//
// export default function Gallery() {
//     const getRandomDimension = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
//
//     const couple = Array.from({length: 24}, (_, index) => ({
//         itemId: `image-${index + 1}`,
//         mediaUrl: `images/gallery/clients/Sakina_Mohammed/couple/couple${index + 1}.jpg`,
//         metaData: {
//             type: "image",
//             height: getRandomDimension(300, 800),
//             width: getRandomDimension(400, 1000),
//             title: `Image Title ${index + 1}`,
//             description: `This is the description for image ${index + 1}`,
//             focalPoint: [0, 0],
//             link: {
//                 url: "http://www.google.com",
//                 target: "_blank",
//             },
//         },
//     }));
//
//     const bride = Array.from({length: 17}, (_, index) => ({
//         itemId: `image-${index + 1}`,
//         mediaUrl: `images/gallery/clients/Sakina_Mohammed/bride/bride${index + 1}.jpg`,
//         metaData: {
//             type: "image",
//             height: getRandomDimension(300, 800),
//             width: getRandomDimension(400, 1000),
//             title: `Image Title ${index + 1}`,
//             description: `This is the description for image ${index + 1}`,
//             focalPoint: [0, 0],
//             link: {
//                 url: "http://example.com",
//                 target: "_blank",
//             },
//         },
//     }));
//     const groom = Array.from({length: 4}, (_, index) => ({
//         itemId: `image-${index + 1}`,
//         mediaUrl: `images/gallery/clients/Sakina_Mohammed/groom/groom${index + 1}.jpg`,
//         metaData: {
//             type: "image",
//             height: getRandomDimension(300, 800),
//             width: getRandomDimension(400, 1000),
//             title: `Image Title ${index + 1}`,
//             description: `This is the description for image ${index + 1}`,
//             focalPoint: [0, 0],
//             link: {
//                 url: "http://example.com",
//                 target: "_blank",
//             },
//         },
//     }));
//
//     const guests = Array.from({length: 7}, (_, index) => ({
//         itemId: `image-${index + 1}`,
//         mediaUrl: `images/gallery/clients/Sakina_Mohammed/guests/guests${index + 1}.jpg`,
//         metaData: {
//             type: "image",
//             height: getRandomDimension(300, 800),
//             width: getRandomDimension(400, 1000),
//             title: `Image Title ${index + 1}`,
//             description: `This is the description for image ${index + 1}`,
//             focalPoint: [0, 0],
//             link: {
//                 url: "http://example.com",
//                 target: "_blank",
//             },
//         },
//     }));
//     const stage = Array.from({length: 11}, (_, index) => ({
//         itemId: `image-${index + 1}`,
//         mediaUrl: `images/gallery/clients/Sakina_Mohammed/stage/stage${index + 1}.jpg`,
//         metaData: {
//             type: "image",
//             height: getRandomDimension(300, 800),
//             width: getRandomDimension(400, 1000),
//             title: `Image Title ${index + 1}`,
//             description: `This is the description for image ${index + 1}`,
//             focalPoint: [0, 0],
//             link: {
//                 url: "http://example.com",
//                 target: "_blank",
//             },
//         },
//     }));
//
//     const venue = Array.from({length: 9}, (_, index) => ({
//         itemId: `image-${index + 1}`,
//         mediaUrl: `images/gallery/clients/Sakina_Mohammed/venue/venue${index + 1}.jpg`,
//         metaData: {
//             type: "image",
//             height: getRandomDimension(300, 800),
//             width: getRandomDimension(400, 1000),
//             title: `Image Title ${index + 1}`,
//             description: `This is the description for image ${index + 1}`,
//             focalPoint: [0, 0],
//             link: {
//                 url: "http://example.com",
//                 target: "_blank",
//             },
//         },
//     }));
//
//
//     const [container, setContainer] = useState({
//         width: window.innerWidth,
//         height: window.innerHeight,
//     });
//
//     useEffect(() => {
//         const handleResize = () => {
//             setContainer({
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             });
//         };
//
//         window.addEventListener("resize", handleResize);
//
//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);
//
//     const options = {
//         galleryLayout: 1, // Column layout
//         cubeType: "fit", // Ensures images fit within the container
//         cubeImages: true,
//         isVertical: false, // Horizontal layout
//         scrollDirection: 1, // Horizontal scroll
//         gallerySize: 100,
//         allowTitle: true,
//         groupSize: 1, // Single image per row
//         fixedColumns: 1, // Forces one image per row
//         enableInfiniteScroll: true,
//         behaviors: [
//             {on: "hover", action: "none"},
//             {on: "click", action: "link"},
//         ],
//
//     };
//
//
//
//     // The eventsListener will notify you anytime something has happened in the gallery.
//     const eventsListener = (eventName: string, eventData:any) => console.log({eventName, eventData});
//
//     return (
//         <div className="text-center">
//             <h1 className={`${cursiveFont.className} text-center font-bold text-4xl py-10`}>
//                 The Couple
//             </h1>
//             <div id="gallery">
//
//                 <ProGallery
//                     id="gallery1"
//                     items={couple}
//                     options={options}
//                     container={container}
//                     scrollingElement={window}
//                     eventsListener={eventsListener}
//
//
//                 />
//             </div>
//             <h1 className={`${cursiveFont.className} text-center font-bold text-4xl py-10`}>
//                 The Bride
//             </h1>
//             <div id="gallery2">
//                 <ProGallery
//                     id="gallery2"
//                     items={bride}
//                     options={options}
//                     container={container}
//                     scrollingElement={window}
//                     eventsListener={eventsListener}
//                 />
//             </div>
//
//             <h1 className={`${cursiveFont.className} text-center font-bold text-4xl py-10`}>
//                 The Groom
//             </h1>
//             <div id="gallery2">
//                 <ProGallery
//                     id="gallery2"
//                     items={groom}
//                     options={options}
//                     container={container}
//                     scrollingElement={window}
//                     eventsListener={eventsListener}
//                 />
//             </div>
//
//             <h1 className={`${cursiveFont.className} text-center font-bold text-4xl py-10`}>
//                 The Guests
//             </h1>
//             <div id="gallery2">
//                 <ProGallery
//                     id="gallery2"
//                     items={guests}
//                     options={options}
//                     container={container}
//                     scrollingElement={window}
//                     eventsListener={eventsListener}
//                 />
//             </div>
//
//             <h1 className={`${cursiveFont.className} text-center font-bold text-4xl py-10`}>
//                 The Stage
//             </h1>
//             <div id="gallery2">
//                 <ProGallery
//                     id="gallery2"
//                     items={stage}
//                     options={options}
//                     container={container}
//                     scrollingElement={window}
//                     eventsListener={eventsListener}
//                 />
//             </div>
//             <h1 className={`${cursiveFont.className} text-center font-bold text-4xl py-10`}>
//                 The Venue
//             </h1>
//             <div id="gallery2">
//                 <ProGallery
//                     id="gallery2"
//                     items={venue}
//                     options={options}
//                     container={container}
//                     scrollingElement={window}
//                     eventsListener={eventsListener}
//                 />
//             </div>
//         </div>
//     );
// }