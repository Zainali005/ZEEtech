import Link from "next/link";
import { FaApple, FaGooglePlay, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 lg:px-0">
                <div>
                    <h4 className="text-xl font-semibold mb-4">Exclusive</h4>
                    <ul>
                        <li className="mb-2">
                            <Link href="#"><h3>Subscribe</h3></Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#"><p>Get 10% off your first order</p></Link>
                        </li>
                        <li className="mb-2">
                            <div className="relative">
                                <input
                                    className="bg-black text-gray-400 h-[48px] w-full p-2 pr-12 rounded focus:outline-none border"
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
                                    <FaPaperPlane />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Support</h4>
                    <ul>
                        <li className="mb-2">
                            <Link href="#">Taramri, Islamabad</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#">zainalidevelope@gmail.com</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#">+92 3194634198</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Account</h4>
                    <ul>
                        <li className="mb-2">
                            <Link href="#">My Account</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#">Login/Register</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#">Cart</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#">Wishlist</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#">Shop</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul>
                        <li className="mb-2">
                            <Link href="#">Privacy Policy</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#">Term of Use</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#">Faq</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Social App</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10">
                <p className="text-sm text-gray-400">
                    &copy; 2024 ZeeTech. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
