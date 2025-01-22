import Link from "next/link"
import Image from "next/image"
import {SearchCode } from "lucide-react"
import { Heart } from "lucide-react"
import { ShoppingBag } from "lucide-react"
const Navbar = () => {
    return (
      <div>
        <div>
        <nav className="w-[1500px] bg-[#F5F5F5] ">
            <ul className="flex w-[1440px] h-[36px] text-black bg-[#F5F5F5]">
                <li className="w-7 h-7 ml-8 mt-1">
                       <Image
                            src={"/images/logo1.png"}
                            width={50} height={50}
                            alt={"logo"}
                        />
                    </li>
                    
        <ul className=" flex w-96 h-7 ml-[850px] text-center mt-1 mb-1 bg-[#F5F5F5] text-black gap-4">
        <Link href="/Shop"> Find a Store </Link>
                    <p>|</p>
                    <Link href="/Help"> Help </Link>
                <p>|</p>
                <Link href="/Joinus">Join Us</Link>
                <p>|</p>
                <Link href="/Signin">Sign In</Link>
                    </ul>
            </ul>
        </nav>
        <nav className="flex w-[1500px] h-[60px] bg-white ">
            <ul className="w-[78.47px] h-14 ml-10 bg-white">
                <li className="w-16 h-12 mt-2 ml-[9.81px] bg-white">
                    <Image 
                    src={"/images/Frame (1).png"}
                    width={150} height={150}  
                alt="logo1" />
                    </li> </ul>
<ul className=" flex p-5 text-black items-center justify-center gap-5 ml-80 font-semibold">
                    <li> <a href="">New & Featured</a> </li>
                    <Link href="/Bag">Men</Link>
                <li> <a href="">Women</a> </li>
                <li> <a href="">Kids</a> </li>
                <li> <a href="">Sale</a> </li>
                <li> <a href="">SNKRS</a> </li>
                <ul className="flex w-44 h-10 bg-[#F5F5F5] ml-60 border rounded-lg ">
                    <li className="pt-1 pl-1"><SearchCode /></li> <li className="text-right text-base pl-2 pt-1">search</li>
                </ul>
                <li className="w-7 h-7 items-center bg-white"><Heart /></li>
                <li className="w-7 h-7 items-center bg-white"><ShoppingBag /></li>
                    </ul>
        </nav>
        </div>
      </div>
    )
  }
  
  export default Navbar