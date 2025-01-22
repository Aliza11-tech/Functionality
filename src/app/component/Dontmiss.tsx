import Image from "next/image"
const Dontmiss = () => {
    return(
        <div className="w-[1344px] h-[977px] mt-4 ml-12">
            <div className="w-[111.48px] h-[27px] font-semibold text-lg mb-4">
            Dont Miss
            </div>
            <div className="w-[1344px] h-[700px]">
            <Image
            src={"/images/Image (10).png"}
            alt="next"
            width={1344} height={700}
            />
            </div>
            <div className="w-[1008px] h-[177px] mt-10 ml-[168px]">
                <h1 className="w-[512px] h-[60px] ml-[247.97px] font-semibold text-black text-5xl">
                FLIGHT ESSENTIALS
                </h1>
                <h2 className="w-[560px] h-[24px] mt-6 ml-[240px] font-normal text-base">
                Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
                                </h2>
            <button className="text-white w-[80.38px] h-[39px] mt-[30px] ml-[460.81px] rounded-3xl bg-black pt-[7.5px] pr-[21.5px] pb-[7.5px] pl-[21.5px]">
               Shop </button>
            </div>
        </div>
    )
}
export default Dontmiss