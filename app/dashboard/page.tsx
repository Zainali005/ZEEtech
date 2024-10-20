"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headphones from "@/app/Assets/Home/headphones.png";
import iphone from "@/app/Assets/Home/iphone.jpg";
import watches from "@/app/Assets/Home/watches.png";
import FlashSales from "@/app/Components/FlashSales/page";
import Categories from "@/app/Components/Categories/page";
import BestSelling from "@/app/Components/BestSelling/page";
import Offer from "@/app/Components/Offer/page";
import OurProducts from "@/app/Components/OurProducts/page";
import Featured from "@/app/Components/Featured/page";
import FastDeleivery from "@/app/Components/FastDeleivery/page";
import Footer from "@/app/Components/Footer/Page";



export default function Page() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const images = [headphones, iphone, watches];

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div style={{ padding: "10px", textAlign: "center" }}>
                <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-[1024px] xl:w-[1300px] mx-auto">
                <div className="lg:w-1/3 w-full lg:h-[22rem] flex-shrink-0 h-auto lg:border-r border-gray-300 p-4 flex justify-center">
                    <div className="w-full">
                        <ul className="leading-[38px]">
                            <li>
                                <div className="flex justify-between items-center">
                                    <Link href="#" className="hover:underline">
                                        Women&apos;s Fashion
                                    </Link>
                                    <FaChevronDown
                                        className={`cursor-pointer ml-2 transform duration-300 ${openIndex === 0 ? "rotate-180" : ""
                                            }`}
                                        onClick={() => toggleDropdown(0)}
                                    />
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 0 ? "max-h-40" : "max-h-0"
                                        }`}
                                    style={{ zIndex: 10 }}
                                >
                                    <ul className="ml-4 mt-2 space-y-1">
                                        <li>
                                            <Link href="/">Dresses</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Shoes</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Accessories</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-between items-center">
                                    <Link href="#" className="hover:underline">
                                        Men&apos;s Fashion
                                    </Link>
                                    <FaChevronDown
                                        className={`cursor-pointer ml-2 transform duration-300 ${openIndex === 1 ? "rotate-180" : ""
                                            }`}
                                        onClick={() => toggleDropdown(1)}
                                    />
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === 1 ? "max-h-40" : "max-h-0"
                                        }`}
                                    style={{ zIndex: 10 }} // Ensure it's above other elements
                                >
                                    <ul className="ml-4 mt-2 space-y-1">
                                        <li>
                                            <Link href="/">Shirts</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Shoes</Link>
                                        </li>
                                        <li>
                                            <Link href="/">Accessories</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">
                                    Home & Lifestyle
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">
                                    Medicine
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">
                                    Sports & Outdoor
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">
                                    Baby&apos;s & Toys
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">
                                    Groceries & Pets
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">
                                    Health & Beauty
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-2/3 w-full flex justify-center items-center p-4">
                    <div className="relative w-full h-[22rem]">
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index} className="p-2">
                                    <Image
                                        src={image}
                                        alt={`Deal ${index + 1}`}
                                        width={800}
                                        height={400}
                                        className="object-cover rounded-md w-full h-full lg:h-[20rem]"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <FlashSales />
            <Categories />
            <BestSelling/>
            <Offer/>
            <OurProducts/>
            <Featured/>
            <FastDeleivery/>
            <Footer/>
        </>
    );
}
