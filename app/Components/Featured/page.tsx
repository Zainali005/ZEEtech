import Image from "next/image";
import ps5 from "@/app/Assets/NewArrival/ps5-slim-goedkope-playstation_large 1.png";
import attractive from "@/app/Assets/NewArrival/attractive-woman-wearing-hat-posing-black-background 1.png";
import jbl from "@/app/Assets/NewArrival/Frame 707.png";
import fragrance from "@/app/Assets/NewArrival/Frame 706.png";

export default function Page() {
    return (
        <div className="p-4 w-[1300px] mx-auto">
            <div className="flex items-center mb-4">
                <div className="bg-red-500 w-[15px] h-[30px] mr-2"></div>
                <h4 className="text-red-500 font-bold">Featured</h4>
            </div>
            <div>
                <h3 className="font-semibold text-[24px]">New Arrival</h3>
            </div>
            <div className="flex">
                <div className="w-1/2 relative p-4 bg-black text-white">
                    <Image src={ps5} width={400} height={600} alt="PlayStation 5" />
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-2">
                        <h4 className="text-lg font-bold">PlayStation 5</h4>
                        <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                        <button className="text-red-500 font-bold">Shop Now</button>
                    </div>
                </div>
                <div className="w-1/2 pl-4">
                    <div className="flex items-center mb-4">
                        <div className="w-1/2 pr-4 bg-black text-white p-[55.5px]">
                            <h4 className="text-lg font-bold">Women Collection</h4>
                            <p className="text-sm">Featured woman collections that give you another vibe.</p>
                            <button className="text-red-500 font-bold">Shop Now</button>
                        </div>
                        <div className="w-1/2">
                            <Image src={attractive} width={310} height={230} alt="Women Collection" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 pr-2 bg-black text-white  mr-2">
                            <Image src={jbl} width={230} height={230} alt="Speakers" />
                            <div className="mt-2 text-center">
                                <h4 className="text-lg font-bold">Speakers</h4>
                                <p className="text-sm">Amazon wireless speakers</p>
                                <button className="text-red-500 font-bold">Shop Now</button>
                            </div>
                        </div>
                        <div className="w-1/2 pl-2 bg-black text-white">
                            <Image src={fragrance} width={230} height={230} alt="Perfume" />
                            <div className="mt-2 text-center">
                                <h4 className="text-lg font-bold">Perfume</h4>
                                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                                <button className="text-red-500 font-bold">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}