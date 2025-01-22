import Link from "next/link"
import Image from "next/image"
const Footerr = () => {
    return(
        <div className="bg-black w-[1500px] h-[331px] mt-6">
    <div className="flex  w-[1372px] h-[213px] mt-10 ml-[48px]">
    <div className=" w-[1029px] h-[213px] mt-10">
        <div className="flex"><div className=" w-[245.25px] h-[166.63px]">
           <Link href="/Shop"> <h1 className="w-[100px] h-8 pt-2 font-normal text-base text-[#FFFFFF]">
            Find A Store
            </h1></Link>
            <Link href={"/Joinus"}><h1 className="w-[180px] h-8 pt-2 font-normal text-base text-[#FFFFFF]">
            Become A Member
            </h1></Link>
            <Link href="/Signin"><h1 className="w-[180px] h-8 pt-2 font-normal text-base text-[#FFFFFF]">
            Sign Up for Email
            </h1></Link>
             <h1 className="w-[180px] h-8 pt-2 font-normal text-base text-[#FFFFFF]">
            Send Us Feedback
            </h1>
            <h1 className="w-[180px] h-8 pt-2 font-normal text-base text-[#FFFFFF]">
            Student Discounts
            </h1>
        </div>
        <div className=" w-[245.25px] h-[213px]">
            <Link href="/Help"><h1 className="w-[100px] h-8 pt-1 font-normal text-base text-[#FFFFFF]">
            GET HELP
            </h1></Link>
            <h1 className="w-[180.93px] h-8 pt-1 font-normal text-sm text-[#7E7E7E]">
            Order Status
            </h1>
            <h1 className="w-[180.93px] h-8 pt-1 font-normal text-sm text-[#7E7E7E]">
            Delivery
            </h1>
            <h1 className="w-[180px] h-8 pt-1 font-normal text-sm text-[#7E7E7E]">
            Returns
            </h1>
            <h1 className="w-[180px] h-8 pt-1 font-normal text-sm text-[#7E7E7E]">
            Payment Options
            </h1>
            <h1 className="w-[250px] h-8 pt-1 font-normal text-sm text-[#7E7E7E]">
            Contact Us On Nike.com Inquiries
            </h1>
            <h1 className="w-[250px] h-8 pt-1 font-normal text-sm text-[#7E7E7E]">
            Contact Us On All Other Inquiries
            </h1>
        </div>
        <div className="ml-12 w-[245.25px] h-[151px]">
        <Link href="/Home"><h1 className="w-[180px] h-8 pt-1 font-normal text-base text-[#FFFFFF]">
            ABOUT NIKE
            </h1></Link>
            <h1 className="w-[180.93px] h-8 pt-1 font-normal text-sm text-[#7E7E7E]">
            News
            </h1>
            <h1 className="w-[180.93px] h-8 pt-1 font-normal text-sm text-[#7E7E7E]">
            Careers
            </h1>
            <h1 className="w-[180px] h-8 pt-1 font-normal text-sm text-[#7E7E7E]">
            Investors
            </h1>
            <h1 className="w-[180px] h-8 pt-1 font-normal text-sm text-[#7E7E7E]">
            Sustainability
            </h1>
        </div>
        </div>
    </div>
    <div className="flex w-[337px] h-[37px] mt-10 ">
        <ul className="w-[30px] h-[30px] ml-[169px] ">
            <Image
            src={"/images/Vector (3).png"}
            alt="logo"
            width={30} height={30}
            />
        </ul>
        <ul className="w-[30px] h-[30px] ml-3 ">
        <Image
            src={"/images/Vector (4).png"}
            alt="logo"
            width={30} height={30}
            />
        </ul>
        <ul className="w-[30px] h-[30px] ml-3 ">
        <Image
            src={"/images/Vector (5).png"}
            alt="logo"
            width={30} height={30}
            />
        </ul>
        <ul className="w-[30px] h-[30px] ml-3 ">
        <Image
            src={"/images/Vector (6).png"}
            alt="logo"
            width={30} height={30}
            />
        </ul>
    </div>
        </div>
        <div className=" w-[1372px] h-[62px] mt-14 ml-[48px]">
            <div className="flex">
            <div><div className="w-[672px] h-8 mt-3 ml-2">
                <div className="flex w-[60.03px] h-[15px]  pr-2 gap-2">
                    <h1 className="w-[18px] h-[15px] mt-8">
                    <Image
            src={"/images/Frame (12).png"}
            alt="logo"
            width={18} height={15}
            />
                    </h1>
<h2 className="w-[26px] h-3 font-normal text-xs text-[#FFFFFF] mt-8">
    India</h2>
                </div>
                <h1 className="text-[#7E7E7E] w-[200.48px] h-[14px] mt-[17px] ml-[76.03px] font-normal text-xs">
    © 2023 Nike, Inc. All Rights Reserved
    </h1>
            </div></div>
            <div><div className="flex w-[680px] h-[46px] mt-4 ml-1 ">
        <h1 className="w-[38.23px] h-[14px] mt-[17px] ml-[280px] font-normal text-sm text-[#7E7E7E]">
            Guides
        </h1>
        <h1 className="w-[100px] h-[14px] mt-[17px] ml-6 font-normal text-sm text-[#7E7E7E]">
           Terms of Sale
        </h1>
        <h1 className="w-[100px] h-[14px] mt-[17px] ml-4 font-normal text-sm text-[#7E7E7E]">
           Terms of Use
        </h1>
        <h1 className="w-[140px] h-[14px] mt-[17px] ml-4 font-normal text-sm text-[#7E7E7E]">
           Nike Privacy Policy
        </h1>
            </div>
            </div></div>
            </div>        
        </div>
    )
} 
export default Footerr