"use client";

import Gallery from "@/app/gallery2/component/Gallery";
import { MonteCarlo } from "next/font/google";

const cursiveFont = MonteCarlo({ weight: "400", subsets: ["latin"] });

export default function Gallery2() {
    const galleryItems = [
        {
            type: "photo",
            content:
                "https://www.brides.com/thmb/JgD0sfveJXGR6Vwh-c2Yriw6Z0c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Main-Hindu-Wedding-Traditions-Stephanie-Velez-6cf14a902ea947c09dc0722d29a9224a.jpg",
        },
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYqTBJnups5EJsTZC-i9Oh3giPNNnY4tN4eFlxI_JicW--2Q7DBkTn8oojLfG3c3M5qU&usqp=CAU",
        },
        {
            type: "video",
            content: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
       
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBgT_AUGNEXiCL1G5ruergyec_brTnVYmjw&s",
        },
        {
            type: "photo",
            content:
                "https://mattparryphotography.co.uk/wp-content/uploads/2022/06/london-wedding-photographer-21.jpg",
        },
        {
            type: "photo",
            content:
                "https://img.freepik.com/premium-photo/indian-bride-groom-posing-their-wedding-indian-groom-white-sherwani-bride-dark-red-le_160117-3708.jpg",
        },
        {
            type: "photo",
            content:
                "https://i.pinimg.com/736x/b7/0e/b3/b70eb338380c767808de056e1a876415.jpg",
        },
        {
            type: "photo",
            content:
                "https://images.squarespace-cdn.com/content/v1/537bac83e4b0462bc17bdf84/d831d9d5-9d33-4425-858b-fd05ad2ed756/Indian+Wedding+Photography136.jpg",
        },
        {
            type: "photo",
            content:
                "https://emmacleary.com/wp-content/uploads/2023/09/Emma_Cleary_Photo_and_Video_0646-scaled.jpg",
        },
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDO7oqk4dI1nNX4qDjYdn2FftsVirI9czA2tbOT_Px1MoF3zRoV05wq4pRVBGycfqJejQ&usqp=CAU",
        },
        {
            type: "photo",
            content:
                "https://www.brides.com/thmb/JgD0sfveJXGR6Vwh-c2Yriw6Z0c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Main-Hindu-Wedding-Traditions-Stephanie-Velez-6cf14a902ea947c09dc0722d29a9224a.jpg",
        },
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYqTBJnups5EJsTZC-i9Oh3giPNNnY4tN4eFlxI_JicW--2Q7DBkTn8oojLfG3c3M5qU&usqp=CAU",
        },
        {
            type: "video",
            content: "https://www.w3schools.com/html/mov_bbb.mp4",
        },

        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBgT_AUGNEXiCL1G5ruergyec_brTnVYmjw&s",
        },
        {
            type: "photo",
            content:
                "https://mattparryphotography.co.uk/wp-content/uploads/2022/06/london-wedding-photographer-21.jpg",
        },
        {
            type: "photo",
            content:
                "https://img.freepik.com/premium-photo/indian-bride-groom-posing-their-wedding-indian-groom-white-sherwani-bride-dark-red-le_160117-3708.jpg",
        },
        {
            type: "photo",
            content:
                "https://i.pinimg.com/736x/b7/0e/b3/b70eb338380c767808de056e1a876415.jpg",
        },
        {
            type: "photo",
            content:
                "https://images.squarespace-cdn.com/content/v1/537bac83e4b0462bc17bdf84/d831d9d5-9d33-4425-858b-fd05ad2ed756/Indian+Wedding+Photography136.jpg",
        },
        {
            type: "photo",
            content:
                "https://emmacleary.com/wp-content/uploads/2023/09/Emma_Cleary_Photo_and_Video_0646-scaled.jpg",
        },
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDO7oqk4dI1nNX4qDjYdn2FftsVirI9czA2tbOT_Px1MoF3zRoV05wq4pRVBGycfqJejQ&usqp=CAU",
        },
        {
            type: "photo",
            content:
                "https://www.brides.com/thmb/JgD0sfveJXGR6Vwh-c2Yriw6Z0c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Main-Hindu-Wedding-Traditions-Stephanie-Velez-6cf14a902ea947c09dc0722d29a9224a.jpg",
        },
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYqTBJnups5EJsTZC-i9Oh3giPNNnY4tN4eFlxI_JicW--2Q7DBkTn8oojLfG3c3M5qU&usqp=CAU",
        },
        {
            type: "video",
            content: "https://www.w3schools.com/html/mov_bbb.mp4",
        },

        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBgT_AUGNEXiCL1G5ruergyec_brTnVYmjw&s",
        },
        {
            type: "photo",
            content:
                "https://mattparryphotography.co.uk/wp-content/uploads/2022/06/london-wedding-photographer-21.jpg",
        },
        {
            type: "photo",
            content:
                "https://img.freepik.com/premium-photo/indian-bride-groom-posing-their-wedding-indian-groom-white-sherwani-bride-dark-red-le_160117-3708.jpg",
        },
        {
            type: "photo",
            content:
                "https://i.pinimg.com/736x/b7/0e/b3/b70eb338380c767808de056e1a876415.jpg",
        },
        {
            type: "photo",
            content:
                "https://images.squarespace-cdn.com/content/v1/537bac83e4b0462bc17bdf84/d831d9d5-9d33-4425-858b-fd05ad2ed756/Indian+Wedding+Photography136.jpg",
        },
        {
            type: "photo",
            content:
                "https://emmacleary.com/wp-content/uploads/2023/09/Emma_Cleary_Photo_and_Video_0646-scaled.jpg",
        },
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDO7oqk4dI1nNX4qDjYdn2FftsVirI9czA2tbOT_Px1MoF3zRoV05wq4pRVBGycfqJejQ&usqp=CAU",
        },
        {
            type: "photo",
            content:
                "https://www.brides.com/thmb/JgD0sfveJXGR6Vwh-c2Yriw6Z0c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Main-Hindu-Wedding-Traditions-Stephanie-Velez-6cf14a902ea947c09dc0722d29a9224a.jpg",
        },
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYqTBJnups5EJsTZC-i9Oh3giPNNnY4tN4eFlxI_JicW--2Q7DBkTn8oojLfG3c3M5qU&usqp=CAU",
        },
        {
            type: "video",
            content: "https://www.w3schools.com/html/mov_bbb.mp4",
        },

        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBgT_AUGNEXiCL1G5ruergyec_brTnVYmjw&s",
        },
        {
            type: "photo",
            content:
                "https://mattparryphotography.co.uk/wp-content/uploads/2022/06/london-wedding-photographer-21.jpg",
        },
        {
            type: "photo",
            content:
                "https://img.freepik.com/premium-photo/indian-bride-groom-posing-their-wedding-indian-groom-white-sherwani-bride-dark-red-le_160117-3708.jpg",
        },
        {
            type: "photo",
            content:
                "https://i.pinimg.com/736x/b7/0e/b3/b70eb338380c767808de056e1a876415.jpg",
        },
        {
            type: "photo",
            content:
                "https://images.squarespace-cdn.com/content/v1/537bac83e4b0462bc17bdf84/d831d9d5-9d33-4425-858b-fd05ad2ed756/Indian+Wedding+Photography136.jpg",
        },
        {
            type: "photo",
            content:
                "https://emmacleary.com/wp-content/uploads/2023/09/Emma_Cleary_Photo_and_Video_0646-scaled.jpg",
        },
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDO7oqk4dI1nNX4qDjYdn2FftsVirI9czA2tbOT_Px1MoF3zRoV05wq4pRVBGycfqJejQ&usqp=CAU",
        },
        {
            type: "photo",
            content:
                "https://www.brides.com/thmb/JgD0sfveJXGR6Vwh-c2Yriw6Z0c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Main-Hindu-Wedding-Traditions-Stephanie-Velez-6cf14a902ea947c09dc0722d29a9224a.jpg",
        },
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYqTBJnups5EJsTZC-i9Oh3giPNNnY4tN4eFlxI_JicW--2Q7DBkTn8oojLfG3c3M5qU&usqp=CAU",
        },
        {
            type: "video",
            content: "https://www.w3schools.com/html/mov_bbb.mp4",
        },

        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBgT_AUGNEXiCL1G5ruergyec_brTnVYmjw&s",
        },
        {
            type: "photo",
            content:
                "https://mattparryphotography.co.uk/wp-content/uploads/2022/06/london-wedding-photographer-21.jpg",
        },
        {
            type: "photo",
            content:
                "https://img.freepik.com/premium-photo/indian-bride-groom-posing-their-wedding-indian-groom-white-sherwani-bride-dark-red-le_160117-3708.jpg",
        },
        {
            type: "photo",
            content:
                "https://i.pinimg.com/736x/b7/0e/b3/b70eb338380c767808de056e1a876415.jpg",
        },
        {
            type: "photo",
            content:
                "https://images.squarespace-cdn.com/content/v1/537bac83e4b0462bc17bdf84/d831d9d5-9d33-4425-858b-fd05ad2ed756/Indian+Wedding+Photography136.jpg",
        },
        {
            type: "photo",
            content:
                "https://emmacleary.com/wp-content/uploads/2023/09/Emma_Cleary_Photo_and_Video_0646-scaled.jpg",
        },
        {
            type: "photo",
            content:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDO7oqk4dI1nNX4qDjYdn2FftsVirI9czA2tbOT_Px1MoF3zRoV05wq4pRVBGycfqJejQ&usqp=CAU",
        },
    ];

    return (
        <div className="p-4">
            <h1
                className={`${cursiveFont.className} text-2xl font-bold text-center mb-6`}
            >
                Wedding Gallery
            </h1>
            <Gallery items={galleryItems} />
        </div>
    );
}