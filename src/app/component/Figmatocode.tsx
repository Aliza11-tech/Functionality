import Image from "next/image"

const FigmaToCode = () => {
    return (
        <div className="w-[1440px] h-[604.36px]">
            <div className="w-[1440px] h-[52px]  flex ">
                <h1 className="w-[161.59px] h-[27px] mt-[13px] ml-12 bg-white text-black text-xl font-medium">
                Best of Air Max
                </h1>
        <ul className="flex  w-[164.75px] h-[52px] ml-[1000px] pl-[7px] items-center gap-2">
            <li className=" w-[37px] h-6 font-medium text-lg text-black mr-2">
                Shop
            </li>
            <li className="w-12 h-12 rounded-full bg-[#F5F5F5]">
                <div className="w-6 h-6 m-3">
                <Image
                src={"/images/Frame (9).png"}
                alt="next"
                width={50} height={50}
                /></div>
            </li>
            <li className="w-12 h-12 rounded-full bg-[#E5E5E5]">
            <div className="w-6 h-6 m-3">
                <Image
                src={"/images/Frame (8).png"}
                alt="next"
                width={50} height={50}
                /></div>
            </li>
        </ul>
            </div>
        <div className="flex w-[1440px] h-[540.36px]">
            <div className="bg-[#F6F6F6] ml-12 w-[441.36px] h-[510.36px] ">
                <div className="flex justify-center">
                    <Image src={"/images/image.png"} alt="ProductOne" width={441} height={442} />
                </div>
                <div className="flex text-black">
                <h3 className=" pt-4 text-base font-semibold">
                    Nike Air Max Pulse
                </h3>
                <h3 className="pl-52 pt-4 text-base font-semibold text-right">
                ₹ 13 995
                </h3></div>
                <h3 className="pl-1  text-base font-medium text-slate-400">
                    Womens Shoes 
                </h3>
                </div>
                <div className="bg-[#F6F6F6] ml-14 mb-3 w-[442px] h-[511px] ">
                <div className="flex justify-center">
                    <Image src={"/images/image.png"} alt="ProductOne" width={441} height={442} />
                </div>
                <div className="flex text-black">
                <h3 className="pl-1 pt-4 text-base font-semibold">
                    Nike Air Max Pulse
                </h3>
                <h3 className="pl-52 pt-4 text-base font-semibold text-right">
                ₹ 13 995
                </h3></div>
                <h3 className="pl-1  text-base font-medium text-slate-400">
                    Mens Shoes 
                </h3>
                </div>
                <div className="bg-[#F6F6F6] ml-14 mb-3 w-[442px] h-[511px] ">
                <div className="flex justify-center">
                    <Image src={"/images/image3.png"} 
                    alt="ProductOne" 
                    width={441} height={442} />
                </div>
                <div className="flex text-black ]">
                <h3 className="pl-1 pt-4 text-base font-semibold">
                Nike Air Max 97 SE
                </h3>
                <h3 className="pl-52 pt-4 text-base font-semibold text-right">
                ₹ 16 995
                </h3></div>
                <h3 className="pl-1  text-base font-medium text-slate-400">
                    Mens Shoes 
                </h3>
                </div>
        </div>
        </div>
    )
}

export default FigmaToCode