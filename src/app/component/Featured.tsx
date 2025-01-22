import Image from "next/image"
const Featured = () => {
    return(
        <div className="w-[1344px] h-[977px] ml-12">
     <div className="w-[96.26px] h-[27px] font-medium text-xl">
Featured
            </div>
        <div className="w-[1344px] h-[700px] ">
        <Image 
                src="/images/Image (5).png"
                alt="mainpic"
                width={1400} height={1400} 
            />
            </div>
            <div className="w-[1008px] h-[177px] mt-12 ml-[168px]">
                <h1 className="w-[806px] h-[60px] ml-[100.25px] font-semibold text-5xl">
                STEP INTO WHAT FEELS GOOD
                </h1>
                <h2 className="w-[500px] h-[24px] mt-6 ml-[240px] font-normal text-base">
        Cause everyone should know the feeling of running in that perfect pair.
                                </h2>
            <button className="text-white w-[152.42px] h-[39px] mt-[30px] ml-[424.78px] rounded-3xl bg-black pt-[7.5px] pr-[20px] pb-[7.5px] pl-[20px]">
               Find Your Shoe </button>                    
            </div>
        </div>
    )
}
export default Featured