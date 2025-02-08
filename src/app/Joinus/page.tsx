import Image from "next/image"
import Link from "next/link"
const Joinus = () => {
    return(
        <div className="w-[380px] h-[833px] ml-[515.5px]">
          <div className="w-[324px] h-[182px] ml-7">
                          <div className="w-[324px] h-[17px] ml-[120px]">
                              <Image 
                              src={"/images/Frame (1).png"}
                              alt="logo"
                              width={100} height={17}/>
                          </div>
                  <h1 className="w-[231.22px] h-[31px] mt-20 ml-[46.48px] font-bold text-lg text-center">
                  BECOME A NIKE MEMBER
                  </h1>
                  <p className="w-[282.08px] h-[60px] mt-[20px] ml-[23.5px] text-[#8D8D8D]">
                  Create your Nike Member profile and get first access 
                  to the very best of Nike products, inspiration and community.
                  </p>
                      </div>
        <div className="w-[324px] h-[561px] ml-7 mt-10">
        <input type="Email" 
className="w-[324px] h-[40px] mt-2 border-[#E5E5E5] border-2 rounded px-4" 
placeholder="Email address"/>
<input type="Password" 
className="w-[324px] h-[40px] mt-2 border-[#E5E5E5] border-2 rounded px-4" 
placeholder="Password"/>
<input type="Name" 
className="w-[324px] h-[40px] mt-2 border-[#E5E5E5] border-2 rounded px-4" 
placeholder="First Name"/>
<input type="Name" 
className="w-[324px] h-[40px] mt-2 border-[#E5E5E5] border-2 rounded px-4" 
placeholder="Last Name"/>
<input type="Date of Birth" 
className="w-[324px] h-[40px] mt-2 border-[#E5E5E5] border-2 rounded px-4" 
placeholder="Date of Birth"/>
<h1 className="w-[301.45px] h-[14px] mt-[7px] ml-[11.38px] text-[#8D8D8D] font-normal text-xs text-center">
Get a Nike Member Reward every year on your Birthday.
</h1>
<input type="Country" 
className="w-[324px] h-[40px] mt-2 border-[#E5E5E5] border-2 rounded px-4" 
placeholder="Country"/>
<ul className="w-[301.45px] h-[43px] mt-[7px]  grid grid-cols-2 gap-">
<li className="flex"><input type="Checkbox" 
className="w-[153.89px] h-[43px] mt-2 border-[#E5E5E5] border-2 rounded px-4" 
placeholder="MALE"/> <h1 className="text-lg p-2 mt-2 text-[#8D8D8D]">MALE</h1></li>
<li className="flex"><input type="Checkbox" 
className="w-[153.89px] h-[43px] mt-2 border-[#E5E5E5] border-2 rounded px-4" 
placeholder="FEMALE"/><h1 className="text-lg p-2 mt-2 text-[#8D8D8D]">FEMALE</h1></li>
</ul>
<ul className="flex w-[324px] h-7 mt-10 pr-[33px] pl-[10px]">
<input type="checkbox" 
className="w-[24px] h-[24px] border-[#E5E5E5] border-4" 
placeholder="i"/>
<h1 className="w-[247px] h-[28px] ml-[14px] font-normal text-xs text-[#8D8D8D]">
Sign up for emails to get updates from Nike on products, offers and your Member benefits
</h1></ul>
<div className="w-[324px] h-[59px] mt-2">
<ul className="w-[311px] h-[30px] mt-10 ml-[7.44px] text-[#8D8D8D] text-center">
    <h1 className="flex font-normal text-center text-xs">By creating an account, you agree to Nikes 
<p className="font-normal text-xs text-center underline pl-1">Privacy Policy </p></h1>
<h1 className="flex font-normal text-center text-xs ml-24">and 
<p className="font-normal text-xs text-center underline pl-1">Terms of Use</p></h1>
        </ul></div>
        <button className="w-[324px] h-[40px] bg-black text-white text-center">
         JOIN US
         </button>
         <ul className="w-[324px] h-[24px] mt-4">
<h1 className="flex w-[148.95px] h-[14px] mt-[10px] ml-[87.63px] font-normal text-[#8D8D8D] text-xs">
            Already a Member? 
<Link href="/Signin"><p className="font-normal text-center underline text-black pl-[2px]">Sign In.</p></Link>
            </h1>
         </ul>
        </div>
        </div>
    )
}
export default Joinus