"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
    FaChevronLeft,
    FaChevronRight,
    FaRegHeart,
    FaEye,
    FaStar,
} from "react-icons/fa";
import GamePad from "@/app/Assets/FlashSales/Product2.png";
import Keyboard from "@/app/Assets/FlashSales/Product1.png";
import LED from "@/app/Assets/FlashSales/Product3.png";
import Chair from "@/app/Assets/FlashSales/Product4.png";

const ProductCard = ({
    image,
    title,
    price,
    originalPrice,
    reviews,
    discount,
    count,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const totalStars = 5;
        return Array.from({ length: totalStars }, (_, index) => {
            if (index < fullStars) {
                return <FaStar key={index} className="text-yellow-500" />;
            }
            if (index === fullStars && halfStar) {
                return (
                    <FaStar
                        key={index}
                        className="text-yellow-500"
                        style={{ opacity: 0.5 }}
                    />
                );
            }
            return <FaStar key={index} className="text-gray-300" />;
        });
    };

    return (
        <div
            className="w-[270px] h-[350px] flex flex-col items-center p-4 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative flex items-center justify-center h-[250px] w-full mb-2">
                <div className="absolute top-2 left-2 bg-red-400 text-white px-2 py-1 rounded-lg">
                    -{discount}%
                </div>
                <div className="absolute top-2 right-2 flex flex-col space-y-1">
                    <button className="bg-white p-2 rounded-full hover:bg-gray-200 transition duration-300">
                        <FaRegHeart className="text-red-600" />
                    </button>
                    <button className="bg-white rounded-full p-2 hover:bg-gray-200 transition duration-300">
                        <FaEye className="text-gray-600" />
                    </button>
                </div>
                <div className="bg-[#F5F5F5] rounded-lg flex items-center justify-center h-full w-full">
                    <Image src={image} width={130} height={130} alt={title} />
                    {isHovered && (
                        <button className="absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-1 px-4 rounded transition duration-300 hover:bg-red-600">
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex gap-3">
                <h4 className="text-lg font-bold text-red-600">${price}</h4>
                <h4 className="text-lg font-bold text-gray-500 line-through">
                    ${originalPrice}
                </h4>
            </div>
            <div className="flex items-center">
                <div className="flex space-x-1">{renderStars(reviews)}</div>
                <span className="text-gray-500 ml-2">({count})</span>
            </div>
        </div>
    );
};

export default function Page() {
    const [timeLeft, setTimeLeft] = useState(36600);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return { days, hours, minutes, secs };
    };

    const { days, hours, minutes, secs } = formatTime(timeLeft);

    const products = [
        {
            image: GamePad,
            title: "HAVIT HV-G92 Gamepad",
            price: 120,
            originalPrice: 160,
            discount: 21,
            reviews: 4.5,
            count: 88,
        },
        {
            image: Keyboard,
            title: "Mechanical Keyboard",
            price: 80,
            originalPrice: 100,
            discount: 77,
            reviews: 5,
            count: 77,
        },
        {
            image: LED,
            title: "RGB LED Strip",
            price: 50,
            originalPrice: 70,
            discount: 9,
            reviews: 4.2,
            count: 21,
        },
        {
            image: Chair,
            title: "Gaming Chair",
            price: 200,
            originalPrice: 250,
            discount: 89,
            reviews: 3.6,
            count: 5,
        },
        {
            image: Chair,
            title: "Gaming Chair 2",
            price: 200,
            originalPrice: 250,
            discount: 89,
            reviews: 3.6,
            count: 5,
        },
    ];

    const totalProducts = products.length;

    const handleNext = () => {
        if (currentIndex < totalProducts - itemsPerPage) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const currentProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <>
            <div className="p-4 w-[1300px] mx-auto mt-36">
                <div className="flex items-center mb-4">
                    <div className="bg-red-500 w-[15px] h-[30px] mr-2"></div>
                    <h4 className="text-red-500 font-bold">Today&apos;s</h4>
                </div>
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Flash Sales</h2>
                    <div className="flex flex-col items-center">
                        <div className="flex space-x-4 mb-1">
                            <div className="flex flex-col items-center">
                                <span className="text-lg text-gray-400">Days</span>
                                <span className="text-xl font-extrabold text-red-600">
                                    {days}
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-lg text-gray-400">Hours</span>
                                <span className="text-xl font-extrabold text-red-600">
                                    {hours}
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-lg text-gray-400">Minutes</span>
                                <span className="text-xl font-extrabold text-red-600">
                                    {minutes}
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-lg text-gray-400">Seconds</span>
                                <span className="text-xl font-extrabold text-red-600">
                                    {secs}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <button
                            className="flex mr-2 items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-300 shadow hover:bg-gray-200 transition duration-300"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            <FaChevronLeft className="text-gray-600" />
                        </button>
                        <button
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-300 shadow hover:bg-gray-200 transition duration-300"
                            onClick={handleNext}
                            disabled={currentIndex >= totalProducts - itemsPerPage}
                        >
                            <FaChevronRight className="text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pl-12">
                {currentProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        reviews={product.reviews}
                        discount={product.discount}
                        count={product.count}
                    />
                ))}
            </div>
            <div className="flex justify-center my-4">
                <button className="w-[234px] h-[56px] bg-[#DB4444] text-white rounded transition hover:bg-[#C23333]">
                    View All Products
                </button>
            </div>
            <hr className="w-[1300px] mx-auto border-t-2 border-gray-300 my-4" />
        </>
    );
}
