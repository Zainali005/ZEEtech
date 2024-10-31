"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { API_URL } from "@/app/utils/api";
import { useRouter } from "next/navigation";
import Header from "@/app/Components/Header/Page";
import Footer from "@/app/Components/Footer/Page";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Password reset link sent! Check your email.");
      router.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full lg:w-[1024px] xl:w-[1305px] h-auto mx-auto flex flex-col lg:flex-row my-48">
        <div className="w-full flex justify-center">
          <div className="flex flex-col justify-center items-center w-full px-4">
            <h5 className="text-2xl font-bold mb-2 text-center">Forgot Password</h5>
            <p className="text-gray-500 mb-6 text-center">Enter your email below to reset your password</p>

            <form className="w-full max-w-[400px]" onSubmit={handleForgotPassword}>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:border-b-2 transition duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#DB4444] text-white py-2 rounded-md hover:bg-red-800 transition duration-200"
              >
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
