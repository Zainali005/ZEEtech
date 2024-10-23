import coat from "@/app/Assets/BestSelling/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png";
import bag from "@/app/Assets/BestSelling/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png";
import cooler from "@/app/Assets/BestSelling/gammaxx-l240-argb-1-500x500 1.png";
import bookself from "@/app/Assets/BestSelling/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png";
import Image from "next/image";
import { FaRegHeart, FaEye } from "react-icons/fa";

const products = [
    { id: 1, name: "The North Face Coat", price: "$260", originalPrice: "$300", image: coat, rating: 4, reviews: 88 },
    { id: 2, name: "Gucci Duffle Bag", price: "$1,200", originalPrice: "$1,500", image: bag, rating: 5, reviews: 22 },
    { id: 3, name: "Cooling System", price: "$90", originalPrice: "$120", image: cooler, rating: 3, reviews: 15 },
    { id: 4, name: "Bookshelf", price: "$150", originalPrice: "$200", image: bookself, rating: 4, reviews: 35 },
];

const StarRating = ({ rating, reviews }) => {
    return (
        <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className={`w-4 h-4 ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .587l3.668 7.425 8.229 1.185-5.952 5.54 1.406 8.228L12 18.897l-7.35 3.858 1.406-8.228-5.952-5.54 8.229-1.185z" />
                    </svg>
                ))}
            </div>
            <span className="text-gray-600">({reviews})</span>
        </div>
    );
};

export default function Page() {
    return (
        <div className="p-4 w-[1300px] mx-auto">
            <div className="flex items-center mb-4">
                <div className="bg-red-500 w-[15px] h-[30px] mr-2"></div>
                <h4 className="text-red-500 font-bold">Best Selling Products</h4>
            </div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl"><b>Browse by Categories</b></h3>
                <button className="w-[159px] h-[56px] bg-red-500 text-white font-semibold">View All</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="relative w-full h-[350px] rounded overflow-hidden">
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                            <button className="bg-white p-1 rounded-full shadow hover:bg-red-200 transition duration-300">
                                <FaRegHeart className="text-red-500" />
                            </button>
                            <button className="bg-white p-1 rounded-full shadow hover:bg-gray-200 transition duration-300">
                                <FaEye className="text-gray-600" />
                            </button>
                        </div>
                        <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center">
                            <Image src={product.image} width={120} height={120} alt={product.name} />
                        </div>
                        <div className="p-2">
                            <h5 className="font-semibold">{product.name}</h5>
                            <h6 className="text-red-500">
                                {product.price} <span className="line-through text-gray-500">{product.originalPrice}</span>
                            </h6>
                            <StarRating rating={product.rating} reviews={product.reviews} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
