"use client"
import Navbar from "@/app/Components/NavBar/page";
import TopBar from "@/app/Components/TopBar/page";
import { usePathname } from 'next/navigation';

export default function Page() {
    const pathname = usePathname();
    const pathParts = pathname.startsWith('/') ? pathname.slice(1).split('/') : pathname.split('/');

    return (
        <>
            <TopBar />
            <Navbar />
            <div className="my-6 w-[1170px] flex mx-auto">
                <h5>
                    {pathParts.map((part, index) => (
                        <span key={index}>
                            {index === pathParts.length - 1 ? (
                                <strong>{part}</strong>
                            ) : (
                                <>{part} / </>
                            )}
                        </span>
                    ))}
                </h5>
            </div>
            <div className="flex w-full lg:w-[1024px] xl:w-[1300px]">
                <div>1</div>
                <div>2</div>
            </div>
        </>
    )
}
