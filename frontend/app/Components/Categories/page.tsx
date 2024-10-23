import React, { useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaMobileAlt,
    FaDesktop,

    FaCamera,
    FaHeadphones,
    FaGamepad
} from "react-icons/fa";
import { IoWatch } from "react-icons/io5";


const categories = [
    { name: "Phone", icon: <FaMobileAlt /> },
    { name: "Computer", icon: <FaDesktop /> },
    { name: "Smart Watch", icon: <IoWatch /> },
    { name: "Camera", icon: <FaCamera /> },
    { name: "Headphone", icon: <FaHeadphones /> },
    { name: "Gaming", icon: <FaGamepad /> }
];

export default function Page() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < categories.length - 6) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="p-4 w-[1300px] mx-auto">
            <div className="flex items-center mb-4">
                <div className="bg-red-500 w-[15px] h-[30px] mr-2"></div>
                <h4 className="text-red-500 font-bold">Categories</h4>
            </div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl"><b>Browse by Categories</b></h3>
                <div className="flex items-center">
                    <button
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-300 shadow hover:bg-gray-200 transition duration-300"
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                    >
                        <FaChevronLeft className="text-gray-600" />
                    </button>
                    <button
                        className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-300 shadow hover:bg-gray-200 transition duration-300"
                        onClick={handleNext}
                        disabled={currentIndex >= categories.length - 6}
                    >
                        <FaChevronRight className="text-gray-600" />
                    </button>
                </div>
            </div>
            <div className="flex overflow-hidden py-6 space-x-6 mx-auto justify-center">
                {categories.slice(currentIndex, currentIndex + 6).map((category, index) => (
                    <div
                        key={index}
                        className="mx-2 w-[190px] h-[150px] flex items-center justify-center border rounded shadow transition duration-300 
                        hover:bg-red-500 hover:text-white"
                    >
                        <div className="text-4xl">
                            {category.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
