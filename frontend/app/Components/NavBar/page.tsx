"use client";
import Link from "next/link";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/app/utils/api";
import { toast } from "react-hot-toast"; 

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch(`${API_URL}/logout`, {
                method: "POST",
                credentials: "include",
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Logged out successfully.");
                router.push("/Login");
            } else {
                toast.error(`Logout failed: ${data.message}`);
            }
        } catch (error) {
            toast.error(`Error logging out: ${error.message}`);
        }
    };

    return (
        <>
            <div className="w-full lg:w-[1024px] xl:w-[1300px] mx-auto p-4 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold">ZeeTech</h3>
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
                <div className={`hidden lg:flex flex-grow justify-center`}>
                    <ul className="flex flex-row gap-8">
                        <li>
                            <Link href="/" className="hover:border-b-2 hover:border-black transition duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:border-b-2 hover:border-black transition duration-300">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:border-b-2 hover:border-black transition duration-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="hover:border-b-2 hover:border-black transition duration-300"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="flex items-center w-[300px] h-[38px] border border-gray-300 rounded-md overflow-hidden">
                        <FiSearch className="text-gray-500 ml-3" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full h-full px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <FiHeart className="text-gray-500 cursor-pointer" size={24} />
                    <FiShoppingCart className="text-gray-500 cursor-pointer" size={24} />
                </div>
            </div>
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} w-full`}>
                <div className="flex flex-col items-center mt-4 space-y-4">
                    <ul className="flex flex-col gap-4 text-center">
                        <li>
                            <Link href="/" className="hover:border-b-2 hover:border-black transition duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:border-b-2 hover:border-black transition duration-300">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:border-b-2 hover:border-black transition duration-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="hover:border-b-2 hover:border-black transition duration-300"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:hidden p-4">
                <div className="relative">
                    <div className="flex items-center w-full h-[38px] border border-gray-300 rounded-md overflow-hidden">
                        <FiSearch className="text-gray-500 ml-3" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full h-full px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}
