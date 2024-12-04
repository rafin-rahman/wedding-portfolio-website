"use client";

import React, { useState, useEffect, useRef } from "react";

type GalleryItem = {
    type: "photo" | "video" | "html";
    content: string;
};

interface GalleryProps {
    items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
    const [loadedItems, setLoadedItems] = useState<GalleryItem[]>([]);
    const [visibleItems, setVisibleItems] = useState<number>(12); // Number of items to load initially
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null); // Modal state
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Load more items as the user scrolls
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setVisibleItems((prev) => Math.min(prev + 12, items.length));
                }
            },
            { root: null, threshold: 1.0 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [items]);

    // Shuffle and preload items
    useEffect(() => {
        const shuffled = [...items].sort(() => Math.random() - 0.5);
        setLoadedItems(shuffled);
    }, [items]);

    // Customize grid spans based on screen size
    const getGridSpan = (index: number) => {
        const isMobile = window.innerWidth < 640;

        // Mobile: Smaller, dynamic spans
        if (isMobile) {
            if (index % 6 === 0) return "col-span-2 row-span-2";
            if (index % 3 === 0) return "col-span-2 row-span-1";
            return "col-span-1 row-span-1";
        }

        // Desktop: Larger, dynamic spans
        if (index % 6 === 0) return "col-span-2 row-span-2";
        if (index % 3 === 0) return "col-span-2 row-span-1";
        return "col-span-1 row-span-1";
    };

    const handleItemClick = (item: GalleryItem) => {
        setSelectedItem(item); // Show the modal with the selected item
    };

    const closeModal = () => {
        setSelectedItem(null); // Close the modal
    };

    // Handle ESC key to close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            <div
                className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[250px] grid-flow-dense"
            >
                {loadedItems.slice(0, visibleItems).map((item, index) => (
                    <div
                        key={index}
                        className={`overflow-hidden rounded-md shadow-md animate-fade-in ${getGridSpan(
                            index
                        )}`}
                        onClick={() => handleItemClick(item)} // Handle click event
                    >
                        {item.type === "photo" && (
                            <img
                                src={item.content}
                                alt={`Gallery item ${index}`}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                            />
                        )}
                        {item.type === "video" && (
                            <video
                                controls
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                            >
                                <source src={item.content} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
                {/* Scroll Loader */}
                {visibleItems < items.length && (
                    <div
                        ref={containerRef}
                        className="h-20 w-full bg-gray-100 rounded-md"
                    />
                )}
            </div>

            {/* Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeModal} // Close modal on outside click
                >
                    <div
                        className="relative bg-white rounded-md overflow-hidden shadow-lg w-[90%] sm:w-[70%] lg:w-[50%]"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <div className="p-4">
                            {selectedItem.type === "photo" && (
                                <img
                                    src={selectedItem.content}
                                    alt="Selected item"
                                    className="w-full h-auto object-contain"
                                />
                            )}
                            {selectedItem.type === "video" && (
                                <video
                                    controls
                                    className="w-full h-auto"
                                >
                                    <source src={selectedItem.content} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                            <div className="mt-4 text-center">
                                <a
                                    href={selectedItem.content}
                                    download
                                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;