import type { Metadata } from "next";
import NavBar from "@/app/Components/NavBar/page";
import TopBar from "@/app/Components/TopBar/page";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <TopBar/>
        <NavBar/>
            {children}
        </>
    );
}
