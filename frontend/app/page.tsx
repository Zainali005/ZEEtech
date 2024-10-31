"use client";
import SideImage from "@/app/Assets/Login/Side Image.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Components/Footer/Page";
import Header from "./Components/Header/Page";
import { API_URL } from "./utils/api";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle sign-up logic
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Perform basic validation
    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
        credentials: "include",
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Sign-up failed");
      }

      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
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
            <h5 className="text-2xl font-bold mb-2 text-center">Create an account</h5>
            <p className="text-gray-500 mb-6 text-center">Enter your details below</p>

            <form className="w-full max-w-[400px]" onSubmit={handleSignUp}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:border-b-2 transition duration-200"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Update name state
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
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

              <button
                type="submit"
                className="w-full bg-[#DB4444] text-white py-2 rounded-md hover:bg-red-800 transition duration-200"
              >
                Create Account
              </button>
              <button className="w-full mt-2 border bg-white text-black py-2 rounded-md hover:bg-red-100 transition duration-200">
                Sign Up with Google
              </button>
            </form>

            <div className="text-center my-3">
              <p>
                Already have an account?{" "}
                <Link href="/login" className="text-blue-500 hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
