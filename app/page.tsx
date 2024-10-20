import SideImage from "@/app/Assets/Login/Side Image.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Components/Footer/Page";
import Header from "./Components/Header/Page";


export default function Home() {
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

            <div className="w-full max-w-[400px]">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:border-b-2 transition duration-200"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  id="email"
                  placeholder="Email or Phone Number"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:border-b-2 transition duration-200"
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:border-b-2 transition duration-200"
                />
              </div>

              <button className="w-full bg-[#DB4444] text-white py-2 rounded-md hover:bg-red-800 transition duration-200">
                Create Account
              </button>
              <button className="w-full mt-2 border bg-white text-black py-2 rounded-md hover:bg-red-100 transition duration-200">
                Sign Up with Google
              </button>
              <div className="text-center my-3">
                <p>Already have an account? <Link href="/Login" className="text-blue-500 hover:underline">Log in</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
