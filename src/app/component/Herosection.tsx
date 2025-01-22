import Link from "next/link"
import Image from "next/image"
const Herosection = () => {
    return(
    <div className="w-full h-[1021px]">
    <ul className=" bg-[#F5F5F5] w-full h-12 text-center justify-center">
                       <li className="font-semibold text-black">Hello Nike App</li>
                       <h3 className="flex justify-center text-black">
                        download the app to access everything Nike
                       <p className="underline pl-3 font-bold">Get your Great</p></h3>
                       </ul>
                       <div className="w-[1344px] h-[977px]  
                       ml-20 bg-white ">
    <Image 
        src="/images/Image (4).png"
        alt="mainpic"
        width={1400} height={1400} 
    />
    <div className="justify-center w-[700px] h-60 ml-[310px] mt-4">
<h6 className="text-center font-[Helvetica Neue]">First Look</h6>
<h1 className="text-black font-bold text-5xl text-center">
    NIKE AIR MAX PLUS</h1>
    <h6 className=" mt-4 text-center text-black p-2">
    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
    —designed to push you past your limits and help you go to the max. </h6>
    <button className="rounded-lg pt-2 mt-1 pb-2 bg-black text-white w-24 h-9 ml-52">
                        Notify Me
                    </button>
     <Link href="/shoppage"><button className="rounded-lg pt-2 mt-1 pb-2 bg-black text-white w-32 h-9 ml-8">
                        Shop Air Max
                    </button></Link>
    </div>
</div>
</div>
    )
}
export default Herosection