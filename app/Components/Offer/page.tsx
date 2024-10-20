import { useEffect, useState } from "react";
import jbl from "@/app/Assets/deal/Frame 694.png";
import Image from "next/image";

export default function Page() {
    const [timeLeft, setTimeLeft] = useState(5 * 24 * 60 * 60 + 23 * 60 + 59 + 35); // Total seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    return (
        <>
            <div className="relative w-[1300px] h-[500px] mx-auto flex items-center bg-black text-white">
                <div className="absolute inset-0 ml-[45rem] w-[500px] h-[525px] rounded-full bg-[rgba(244,240,240,0.55)] blur-2xl z-0"></div>
                <div className="flex flex-col justify-center mr-8 p-16 z-10">
                    <h5 className="text-[#00FF66] font-semibold">Categories</h5>
                    <h3 className="font-semibold text-5xl">Enhance Your</h3>
                    <h3 className="font-semibold text-5xl">Music Experience</h3>
                    <div className="flex space-x-8 my-4 py-10">
                        {[
                            { value: days, label: "Days" },
                            { value: hours, label: "Hours" },
                            { value: minutes, label: "Minutes" },
                            { value: seconds, label: "Seconds" }
                        ].map(({ value, label }, index) => (
                            <div key={index} className="bg-white rounded-full text-black flex flex-col items-center justify-center w-24 h-24">
                                <p className="text-2xl">{String(value).padStart(2, '0')}</p>
                                <p>{label}</p>
                            </div>
                        ))}
                    </div>
                    <button className="bg-[#00FF66] text-white w-[171px] h-[56px]"><b>Buy Now!</b></button>
                </div>

                <div className="flex justify-center items-center ml-auto z-10">
                    <Image
                        src={jbl}
                        height={500}
                        width={650}
                        alt="JBL Speaker"
                    />
                </div>
            </div>
        </>
    );
}
