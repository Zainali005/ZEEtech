"use client"
import SideImage from "@/app/Assets/Login/Side Image.png";
import Header from "@/app/Components/Header/Page";
import Footer from "@/app/Components/Footer/Page";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { API_URL } from "@/app/utils/api"
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/v1/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }
            toast.success("Login successful!");
            router.push("/dashboard");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <Header />
            <div className="w-full lg:w-[1024px] xl:w-[1305px] h-auto lg:h-[781px] mx-auto flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
                    <Image
                        src={SideImage}
                        width={800}
                        height={900}
                        alt="Side Image"
                        className="object-cover w-full lg:w-[80%]"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="flex flex-col justify-center items-center w-full h-auto lg:h-[781px] px-4 lg:px-0">
                        <h5 className="text-2xl font-bold mb-2 text-center">Log in to Exclusive</h5>
                        <p className="text-gray-500 mb-6 text-center">Enter your details below</p>

                        <form className="w-full max-w-[400px]" onSubmit={handleLogin}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Email or Phone Number"
                                    className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:border-b-2 transition duration-200"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:border-b-2 transition duration-200"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="text-center my-3 flex justify-between items-center">
                                <div>
                                    <button type="submit" className="bg-[#DB4444] text-white w-[143px] h-[56px]">
                                        Login
                                    </button>
                                </div>
                                <div>
                                    <Link href="/forget-password" className="text-blue-500 hover:underline">
                                        Forget Password?
                                    </Link>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
