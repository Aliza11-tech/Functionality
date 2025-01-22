import Image from "next/image"
const  Essentials = () => {
    return(
        <div className="w-[1344px] h-[592px] ml-12 mt-4">
    <div className=" w-[1344px] h-[52px] font-semibold text-xl">
    The Essentials
    </div>
    <div className="flex w-[1356px] h-[540px] ml=[-6px] gap-2">
    <div className="w-[440px] h-[540px] ml-[458opx] bg-blue-400">
        <Image
                    src={"/images/Image (12).png"}
                    alt="next"
                    width={440} height={540}
                    />
    </div>
    <div className="w-[440px] h-[540px] bg-blue-700">
    <Image
                    src={"/images/Frame (10).png"}
                    alt="next"
                    width={440} height={540}
                    />
    </div>
    <div className="w-[440px] h-[540px] bg-pink-400">
    <Image
                    src={"/images/Image (13).png"}
                    alt="next"
                    width={440} height={540}
                    />
    </div>
</div>
</div>
        
    )
}
export default Essentials