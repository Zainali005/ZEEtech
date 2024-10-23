"use client"
import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [language, setLanguage] = useState('English');

    return (
        <div className="w-full bg-black text-white h-[60px] flex items-center">
            <div className="w-[768px] flex justify-between items-center mx-auto">
                <h3 className="text-center flex-1">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link href="/" className="text-white underline ml-2">Shop now</Link>
                </h3>
                <div className="ml-4">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="bg-black"
                    >
                        <option value="English">English</option>
                        <option value="Urdu">Urdu</option>
                        <option value="Urdu">Chinese</option>
                        <option value="Urdu">Hindi</option>
                        <option value="Urdu">Arabic</option>

                    </select>
                </div>
            </div>
        </div>
    );
}
