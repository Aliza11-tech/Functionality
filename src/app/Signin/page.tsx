import Image from "next/image"
import Link from "next/link"
const Signin = () => {
    return (
        <div className="w-[380px] h-[489px] ml-[550px]">
            <div className="w-[324px] h-[128px] ml-[28px]">
                <div className="w-[324px] h-[17px] ml-[120px]">
                    <Image 
                    src={"/images/Frame (1).png"}
                    alt="logo"
                    width={100} height={17}/>
                </div>
        <h1 className="w-[186.5px] h-[57px] mt-16 ml-[68.84px] font-bold text-lg text-center">
        YOUR ACCOUNT FOR EVERYTHING NIKE
        </h1>
            </div>
            <div className="w-[324px] h-[305px] mt-[56px] ml-[28px]">
<input type="Email" 
className="w-[324px] h-[40px] mt-[5px] border-[#E5E5E5] border-4 px-4" 
placeholder="Email address"/>
<input type="Password" 
className="w-[324px] h-[40px] mt-4 border-[#E5E5E5] border-4 px-4" 
placeholder="Password"/>
<div className="flex w-[324px] h-[20px]">
<div className="flex w-[162px] h-[20px] mt-4">
<input type="checkbox" 
className="w-[20px] h-[20px] border-[#E5E5E5] border-4" 
placeholder="i"/>
<h1 className="w-[99.61px] h-[14px] ml-[14px] font-normal mt-[4px] text-xs text-[#8D8D8D]">
Keep me signed in
</h1>
</div>
<div className="w-[139.61px] h-[14px] mt-[19px] ml-5 font-normal text-xs text-right">
Forgotten your password?
</div></div>
         <div className="w-[324px] h-[59px] mt-2">
<ul className="w-[279.31px] h-[30px] mt-10 ml-[22.44px] text-[#8D8D8D] text-center">
    <h1 className="flex font-normal text-center text-xs">By logging in, you agree to Nikes 
        <p className="font-normal text-xs text-center underline pl-1">Privacy Policy </p></h1>
        <h1 className="font-normal text-center text-xs">and Terms of Use.</h1>
         </ul></div>
         <button className="w-[324px] h-[40px] bg-black text-white text-center">
         SIGN IN
         </button>
         <ul className="w-[324px] h-[24px] mt-4">
<h1 className="flex w-[129.61px] h-[14px] mt-[10px] ml-[97.3px] font-normal text-[#8D8D8D] text-xs">
            Not a Member? 
<Link href="/Joinus"><p className="font-normal text-center underline text-black pl-[2px]">Join Us.</p></Link>
            </h1>
         </ul>
            </div>
        </div>
    )
}
export default Signin