import { FaChevronLeft, FaChevronRight, FaHeart, FaEye } from "react-icons/fa";
import Card from "@/app/Assets/OurProducts/Frame 604.png";
import Camera from "@/app/Assets/OurProducts/eos-250d-03-500x500 1.png";
import Laptop from "@/app/Assets/OurProducts/ideapad-gaming-3i-01-500x500 1.png";
import Garments from "@/app/Assets/OurProducts/curology-j7pKVQrTUsM-unsplash 1.png";
import ElectricCar from "@/app/Assets/OurProducts/Frame 608.png";
import Shoes from "@/app/Assets/OurProducts/Frame 608 (1).png";
import GamePad from "@/app/Assets/OurProducts/Frame 608 (2).png";
import Jacket from "@/app/Assets/OurProducts/Frame 608 (3).png";
import Image from "next/image";

const products = [
    { src: Card, name: "Breed Dry Dog Food", reviews: { count: 88, qualityRating: 4 }, originalPrice: "$30", discountedPrice: "$25", isNew: true },
    { src: Camera, name: "Canon EOS 250D", reviews: { count: 22, qualityRating: 5 }, originalPrice: "$700", discountedPrice: "$650", isNew: false },
    { src: Laptop, name: "IdeaPad Gaming 3i", reviews: { count: 11, qualityRating: 3 }, originalPrice: "$1000", discountedPrice: "$900", isNew: true },
    { src: Jacket, name: "Stylish Jacket", reviews: { count: 15, qualityRating: 4 }, originalPrice: "$50", discountedPrice: "$45", isNew: false },
    { src: Garments, name: "Garments", reviews: { count: 5, qualityRating: 2 }, originalPrice: "$70", discountedPrice: "$80", isNew: true },
    { src: ElectricCar, name: "Electric Car", reviews: { count: 10, qualityRating: 5 }, originalPrice: "$100", discountedPrice: "$200", isNew: false },
    { src: Shoes, name: "Shoes", reviews: { count: 7, qualityRating: 1 }, originalPrice: "$550", discountedPrice: "$3000", isNew: false },
    { src: GamePad, name: "Gamepad", reviews: { count: 3, qualityRating: 3 }, originalPrice: "$100", discountedPrice: "$110", isNew: true }
];

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
    ));
    return <div>{stars}</div>;
};

export default function Page() {
    return (
        <div className="p-4 w-[1300px] mx-auto">
            <div className="flex items-center mb-4">
                <div className="bg-red-500 w-[15px] h-[30px] mr-2"></div>
                <h4 className="text-red-500 font-bold">Our Products</h4>
            </div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl"><b>Explore our Products</b></h3>
                <div className="flex items-center">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition duration-300">
                        <FaChevronLeft className="text-gray-600" />
                    </button>
                    <button className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition duration-300">
                        <FaChevronRight className="text-gray-600" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="relative w-[270px] h-[400px] bg-white p-4 rounded">
                        <div className="relative">
                            {product.isNew && (
                                <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">New</span>
                            )}
                            <div className="w-full h-[250px] flex justify-center items-center bg-[#F5F5F5] mb-2">
                                <Image src={product.src} height={170} width={170} alt={product.name} />
                            </div>
                        </div>
                        <div className="absolute top-2 right-2 flex flex-col space-y-1 p-3">
                            <button className="bg-transparent rounded-full p-1 shadow">
                                <FaHeart className="text-gray-600" />
                            </button>
                            <button className="bg-transparent rounded-full p-1 shadow">
                                <FaEye className="text-gray-600" />
                            </button>
                        </div>
                        <h5 className="text-lg font-semibold">{product.name}</h5>
                        <div className="flex items-center mt-2">
                            <StarRating rating={product.reviews.qualityRating} />
                            <span className="ml-2 text-gray-500">({product.reviews.count})</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="text-red-500 line-through">{product.originalPrice}</span>
                            <span className="text-green-500 font-bold">{product.discountedPrice}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="w-[234px] h-[56px] bg-red-500 text-white"><b>View All Products</b></button>
            </div>
        </div>
    );
}
