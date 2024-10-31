"use client";
import { useState } from "react";
import Navbar from "@/app/Components/NavBar/page";
import LCD from "@/app/Assets/FlashSales/Product3.png";
import Keyboard from "@/app/Assets/FlashSales/Product1.png";
import Image from "next/image";

export default function Page() {
    const [products, setProducts] = useState([
        { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: LCD },
        { id: 2, name: "Keyboard", price: 150, quantity: 1, image: Keyboard },
    ]);

    const updateQuantity = (productId, delta) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId
                    ? { ...product, quantity: Math.max(1, product.quantity + delta) }
                    : product
            )
        );
    };

    const removeProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };

    const calculateSubtotal = (price, quantity) => price * quantity;
    const total = products.reduce(
        (sum, product) => sum + calculateSubtotal(product.price, product.quantity),
        0
    );

    return (
        <>
            <Navbar />
            <div className="w-full max-w-[400px] mx-auto my-10 flex text-sm md:text-base">
                <span>Home / </span>
                <span className="font-semibold">Cart</span>
            </div>
            <div className="w-full px-4 md:px-0">
                <div className="flex gap-4 md:gap-36 max-w-[1400px] mx-auto justify-between border shadow-sm p-5 text-xs md:text-base">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                </div>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex gap-4 md:gap-36 max-w-[1400px] mx-auto justify-between border shadow-sm p-5 my-5 text-xs md:text-base items-center flex-col md:flex-row"
                    >
                        <div className="flex items-center">
                            <div className="relative">
                                <Image width={100} height={100} src={product.image} alt={product.name} className="w-16 h-16 rounded-md" />
                                <button
                                    onClick={() => removeProduct(product.id)}
                                    className="absolute top-0 left-0 bg-red-500 text-white rounded-full p-1 text-xs w-4 h-4 flex justify-center items-center"
                                >
                                    ×
                                </button>
                            </div>
                            <span className="ml-4">{product.name}</span>
                        </div>
                        <div>${product.price}</div>
                        <div className="flex items-center h-[10px] w-[10px]">
                            <div className="flex flex-row items-center border rounded px-2 py-1">
                                <span className="text-center font-medium mr-2">{product.quantity}</span>
                                <div className="flex flex-col space-y-1">
                                    <button
                                        onClick={() => updateQuantity(product.id, 1)}
                                        className="px-1 py-0.5 bg-gray-200 rounded text-xs hover:bg-gray-300"
                                    >
                                        ▲
                                    </button>
                                    <button
                                        onClick={() => updateQuantity(product.id, -1)}
                                        className="px-1 py-0.5 bg-gray-200 rounded text-xs hover:bg-gray-300"
                                    >
                                        ▼
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>${calculateSubtotal(product.price, product.quantity)}</div>
                    </div>
                ))}
                <div className="flex flex-col md:flex-row justify-between w-full max-w-[1400px] mx-auto">
                    <button className="border p-4 w-full md:w-[218px] my-2 md:my-0">Return to Shop</button>
                    <button className="border p-4 w-full md:w-[218px] my-2 md:my-0">Update Cart</button>
                </div>
                <div className="w-full max-w-[1400px] flex flex-col md:flex-row mx-auto mt-5 justify-between">
                    <div className="flex flex-col md:flex-row h-[70px] my-10 lg:my-0    ">
                        <input type="text" placeholder="Coupon Code" className="w-full md:w-[300px] border p-4 mr-0 md:mr-5 rounded-md mb-3 md:mb-0" />
                        <button className="text-white bg-red-500 w-full md:w-[200px] p-4 rounded-md">Apply Coupon</button>
                    </div>
                    <div className="w-full md:w-[470px] h-auto mt-5 md:mt-0">
                        <div className="max-w-full p-5 border border-black rounded-md shadow-sm">
                            <h5 className="pb-4 text-lg font-semibold border-b border-gray-200">Cart Total</h5>

                            <div className="pt-4 space-y-4 text-sm">
                                <div className="flex justify-between items-center">
                                    <div className="text-gray-600">Subtotal:</div>
                                    <div className="font-medium text-gray-800">${total}</div>
                                </div>

                                <hr className="border-gray-200" />
                                <div className="flex justify-between items-center">
                                    <div className="text-gray-600">Shipping</div>
                                    <div className="font-medium text-green-600">Free</div>
                                </div>

                                <hr className="border-gray-200" />
                                <div className="flex justify-between items-center font-semibold text-lg">
                                    <div>Total</div>
                                    <div>${total}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
