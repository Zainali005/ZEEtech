import cargo from "@/app/Assets/FastDeleivery/Services.png";
import services from "@/app/Assets/FastDeleivery/Services (1).png";
import trusted from "@/app/Assets/FastDeleivery/Services (2).png";
import Image from "next/image";

export default function Page() {
    return (
        <div className="w-[943px] mx-auto flex justify-between my-28">
            <div className="w-1/3 text-center">
                <Image src={cargo} width={90} height={90} alt="Free and Fast Delivery" className="mx-auto" />
                <h3 className="font-semibold text-xl leading-[50px]">FREE AND FAST DELIVERY</h3>
                <p className="text-sm">Free delivery for all orders over $140</p>
            </div>
            <div className="w-1/3 text-center">
                <Image src={services} width={90} height={90} alt="24/7 Customer Service" className="mx-auto" />
                <h3 className="font-semibold text-xl leading-[50px]">24/7 CUSTOMER SERVICE</h3>
                <p className="text-sm">Friendly 24/7 customer support</p>
            </div>
            <div className="w-1/3 text-center">
                <Image src={trusted} width={90} height={90} alt="Money Back Guarantee" className="mx-auto" />
                <h3 className="font-semibold text-xl leading-[50px]">MONEY BACK GUARANTEE</h3>
                <p className="text-sm">We return money within 30 days</p>
            </div>
        </div>
    );
}
