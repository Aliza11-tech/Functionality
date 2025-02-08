import { ShoppingCart } from "lucide-react"
import Image from "next/image"
const Singleshoe = () => {
    return(
        <div className="w-[1440px] h-[1173px] mt-24">
    <div className="flex w-[1200px] h-[1125px] mt-12 ml-[120px]">
<div className="w-[653px] h-[653px] mt-[110px] bg-[#F5F5F5]">
    <Image 
                src={"/images/Rectangle (3).png"}
                alt="pic"
                width={653} height={653}/></div>
                <div className="w-[376px] h-[1041px] ml-[205px]">
    <h1 className="w-[367px] h-24 mt-28 font-medium text-5xl">
    Nike Air Force 1 
    PLT.AF.ORM
    </h1>
    <div className="w-[374.92px] h-[413px] pt-6 pb-[1px] gap-[2px]">
        <div className="w-[374.92px] h-[342px]">
        <p className="w-[374.92px] h-[252px] font-normal text-lg">
        Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>
        <h1 className="w-[294.44px] h-[90px] pt-8 pb-8 pr-16 gap-1">
    <p className=" w-[229px] h-[34px] font-semibold text-4xl font-[poppins]">₹ 8 695.00</p>
        </h1>
    </div>
<button className="flex w-[174.42px] h-11 rounded-3xl bg-black mt-2 pt-[9px] pl-[22.5px] pr-[23.92px] pb-[6px]">
<h1 className="w-[29px] h-[29px]">
    <ShoppingCart color="#ffffff" /></h1> 
    <h1 className="w-[99px] h-[29px] font-medium text-base text-[#FFFFFF] font-[poppins] pt-[1px]">
      Add To Cart</h1>
    </button></div>
                </div>
    </div>
        </div>
    )
}
export default Singleshoe