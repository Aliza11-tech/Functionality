import { Package2 } from "lucide-react"
import Image from "next/image"
const Checkout = () =>{
    return(
        <div className="flex w-[880px] h-[2376px] ml-[289px]">
           <div className="w-[440px] h-[2206px] mt-[70px]">
    <div className="w-[440px] h-[386px] pt-5 gap-1">
        <h1 className="w-[379px] h-6 font-sans font-medium text-xl leading-6">
        How would you like to get your order?
        </h1>
        <ul className="w-[440px] h-[338px] pb-6 gap-6">
            <li className="w-[440px] h-[208px] pt-[7px] pr-[2.39px] pb-[9px]">
                <h1 className="w-[437.61px] h-[192px] font-sans font-normal text-sm leading-6 text-[#757575]">
                Customs regulation for India require a copy of the recipients KYC. 
                The address on the KYC needs to match the shipping address. Our courier will contact 
                you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and 
                used solely for the purpose of clearing customs (including sharing it 
                with customs officials)for all orders and returns.
                If your KYC does not match your shipping address, please click the link for more information.
                <p className="w-[437.61px] h-[192px] font-sans font-normal text-sm leading-6 underline text-[#757575]">
                    Learn More
                </p> </h1>
            </li>
            <li className="flex w-[440px] h-[82px] rounded-xl border-2 border-[#111111] pt-[29px] pr-[307px] pl-[21px] pb-[29px] gap-6">
                <h1 className="w-6 h-6"><Package2 /></h1>
        <h1 className="w-16 h-6 font-sans font-medium text-sm leading-6 text-center">Deliver It</h1>
            </li>
        </ul>
    </div>
    <div className="w-[440px] h-[1504px]">
        <h1 className="w-[300px] h-6 font-sans font-medium text-xl leading-6">
            Enter your name and address:</h1>
        <div className="w-[440px] h-[720px]">
    <ul className="w-[440px] h-[616px] text-black">
    <input type="Name" 
className="w-[440px] pt-4 pb-4 pr-[341px] pl-4 h-[56px] mt-7 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
placeholder="First Name"/>
<input type="Name" 
className="w-[440px] pt-4 pb-4 pr-[341px] pl-4 h-[56px] mt-7 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
placeholder="Last Name"/>
<input type="Name" 
className="w-[440px] pt-4 pb-4 pr-[341px] pl-4 h-[56px] mt-7 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
placeholder="Address Line 1"/>
<h1 className="w-[160px] h-6 ml-4 font-normal text-xs leading-6 text-[#757575]">
We do not ship to P.O. boxes
</h1>
<input type="Name" 
className="w-[440px] pt-4 pb-4  pl-4 h-[56px] mt-1 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
placeholder="Address Line 1"/>
<input type="Name" 
className="w-[440px] pt-4 pb-4  pl-4 h-[56px] mt-7 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
placeholder="Address Line 1"/>
<li className="flex w-[440px] h-[56px]">
<input type="Name" 
className="w-[211.19px] pt-4 pb-4  pl-4 h-[56px] mt-7 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
placeholder="Postal Code"/>
<input type="Name" 
className="w-[211.19px] pt-4 pb-4 ml-[17.62px] pl-4 h-[56px] mt-7 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
placeholder="Locality"/>
</li>
<li className="flex w-[440px] h-[56px] mt-6">
<input type="Name" 
className="w-[211.19px] pt-4 pb-4  pl-4 h-[56px] mt-7 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
placeholder="Postal Code"/>
<input type="Name" 
className="w-[211.19px] pt-4 pb-4 ml-[17.62px] pl-4 h-[56px] mt-7 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
placeholder="Locality"/>
</li>
     </ul>
     <ul className="w-[440px] h-[104px]">
        <li className="flex w-[440px] h-6 mt-[3px] pr-[189px]">
    <input type="checkbox" 
    className="w-[18px] h-[18px] border border-[#CCCCCC]"/>
    <h1 className="w-[219px] h-6 font-normal text-sm leading-6 ml-2">
    Save this address to my profile
    </h1>
        </li>
        <li className="flex w-[440px] h-6 mt-7 pr-[189px]">
    <input type="checkbox" 
    className="w-[18px] h-[18px] border border-[#CCCCCC] bg-[#CCCCCC]"/>
    <h1 className="w-[219px] h-6 font-normal text-sm leading-6 ml-2">
    Make this my preferred address
    </h1>
        </li>
     </ul>
        </div>
        <div className="w-[440px] h-[256px] pt-5 pb-2 gap-7">
            <h1 className="w-[333px] h-6 font-medium text-xl leading-6">
            Whats your contact information?
            </h1>
            <input type="Name" 
        className="w-[440px] pt-4 pb-4 pr-[341px] pl-4 h-[56px] mt-7 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
         placeholder="Email"/>
         <h1 className="w-[300px] h-6 ml-4 font-normal text-xs leading-6 text-[#757575]">
         A confirmation email will be sent after checkout.
        </h1> 
        <input type="Name" 
        className="w-[440px] pt-4 pb-4 pr-[341px] pl-4 h-[56px] mt-1 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
         placeholder="Phone Number"/>
         <h1 className="w-[250px] h-6 ml-4 font-normal text-xs leading-6 text-[#757575]">
         A carrier might contact you to confirm delivery.
        </h1> 
        </div>
        <div className="w-[440px] h-[248px] pt-5 pb-2 gap-7">
        <h1 className="w-[333px] h-6 font-medium text-xl leading-6">
            Whats your PAN?
            </h1>
            <input type="Name" 
        className="w-[440px] pt-4 pb-4 pr-[341px] pl-4 h-[56px] mt-7 border border-[#CCCCCC] rounded-s text-black font-normal text-base leading-6" 
         placeholder="Email"/>
         <h1 className="w-[370px] h-6 ml-4 font-normal text-xs leading-6 text-[#757575]">
         Enter your PAN to enable payment with UPI, Net Banking or local card methods
        </h1> 
        <li className="flex w-[440px] h-6 mt-7 pr-[189px] ">
         <input type="checkbox" 
         className="w-[18px] h-[18px] border border-[#CCCCCC] bg-[#CCCCCC]"/>
         <h1 className="w-[219px] h-6 font-normal text-xs leading-6 ml-2 text-[#757575]">
         Save PAN details to Nike Profile
         </h1>
        </li>
        </div>
        <div className="flex w-[440px] h-[42px] mt-5">
         <input type="checkbox" 
         className="w-[18px] h-[18px] border border-[#CCCCCC] bg-[#CCCCCC]"/>
         <div className="w-[404.5px] h-[42px] font-inter text-[12px] font-normal leading-[14px] text-left text-[#757575] ml-2">
         I have read and consent to eShopWorld processing my information in accordance with the
         <span className="underline decoration-solid">Privacy Statement</span> and
          <span className="underline decoration-solid">Cookie Policy</span>. eShopWorld is a trusted Nike partner.
         </div>
        </div>
        <button className="w-[440px] h-[60px] mt-12 rounded-3xl pt-4 pb-4 pr-[185.33px] pl-[185.67px] bg-[#F5F5F5]">
            Continue
        </button>
        <div className="w-[440px] h-[316px] pt-7 gap-7">
            <ul className="mt-[22px] w-[440px] h-[57px] border-t pt-[21px] pb-3 pr-[361px] border-[#E5E5E5]">
                <h1 className="w-[79px] h-[24px] font-sans font-medium text-[20px] leading-6">
                    Deliver </h1>
            </ul>
            <ul className="mt-[22px] w-[440px] h-[57px] border-t pt-[21px] pb-3 pr-[351px] border-[#E5E5E5]">
                <h1 className="w-[89px] h-[24px] font-sans font-medium text-[20px] text-[#757575] leading-6">
                    Shipping</h1>
            </ul>
            <ul className="mt-[22px] w-[440px] h-[57px] border-t pt-[21px] pb-3 pr-[379px] border-[#E5E5E5]">
                <h1 className="w-[61px] h-[24px] font-sans font-medium text-[#757575] text-[20px] leading-6">
                    Billing </h1>
            </ul>
            <ul className="mt-[22px] w-[440px] h-[57px] border-t pt-[21px] pb-3 pr-[351px] border-[#E5E5E5]">
                <h1 className="w-[89px] h-[24px] font-sans font-medium text-[#757575] text-[20px] leading-6">
                    Payment </h1>
            </ul>
        </div>
    </div>
           </div>
           <div className="w-[320px] h-[721px] mt-[70px] ml-[120px]">
            <h1 className="w-[160.37px] h-[26px] mt-[19px] font-medium text-[21px] leading-6">
            Order Summary
            </h1>
            <div className="w-[320px] h-[677px]">
        <ul className="w-[320px] h-[135px] mt-3 border-b border-[#E5E5E5]">
            <li className="flex w-[320.06px] h-[34px] pt-[9px] pb-[9px] gap-[180.06px]">
                <h1 className="w-[60px] h-4 font-normal text-[15px] leading-4 text-[#8D8D8D]">
                    Subtotal
                </h1>
                <h1 className="w-[80px] h-4 font-normal text-[14px] leading-4 text-right text-[#8D8D8D]">
                ₹ 20 890.00
                </h1>
            </li>
            <li className="flex w-[320.06px] h-[34px] pt-[9px] pb-[9px] gap-[170px]">
                <h1 className="w-[124px] h-4 font-normal text-[15px] leading-4 text-[#8D8D8D]">
                Delivery/Shipping
                </h1>
                <h1 className="w-[32px] h-4 font-normal text-[14px] leading-4 text-right text-[#8D8D8D]">
                Free
                </h1>
            </li>
            <li className="flex w-[320px] h-[54px] border-t border-[#E5E5E5] ">
                <h1 className="w-[36px] h-[16px] mt-[19.5px] font-medium text-[15px] leading-4">
                    Total
                </h1>
                <h1 className="w-[84.57px] h-[19px] mt-[17px] ml-[235.63] font-medium text-[14px] leading-4 text-right">
                ₹ 20 890.00
                </h1>
            </li>
        </ul>
        <ul className="w-[316px] h-3 mt-[30px] font-normal text-[9px] leading-6">
            (The total reflects the price of your order, including all duties and taxes)
            </ul>
            <ul className="w-[320px] h-[474px] mt-[26px]">
                <h1 className="w-[249px] h-6 font-bold text-[15px] leading-6">
                Arrives Mon, 27 Mar - Wed, 12 Apr </h1>
                <li className="flex w-[320px] h-[208px] mt-3 gap-3">
                    <h1 className="w-[208px] h-[208px] ">
                        <Image 
                        src={"/images/Frame (16).png"}
                        alt="pp"
                        width={208} height={208}/>
                    </h1>
                    <h2 className="w-[100px] h-[178.78px]">
                        <p className="w-[85.53px] h-[120px] font-normal text-[13px] leading-6">
                        Nike Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top
                        </p>
                        <p className="w-[32px] h-[20px] font-normal text-[13px] leading-[19.6px] text-[#8D8D8D]">
                            Qty 1
                        </p>
                        <p className="w-[37px] h-[20px] font-normal text-[13px] leading-[19.6px] text-[#8D8D8D]">
                            Size L
                        </p>
                        <p className="w-[66px] h-[20px] font-normal text-[13px] leading-[19.6px] text-[#8D8D8D]">
                        ₹ 3 895.00
                        </p>
                    </h2>
                </li>
                <li className="flex w-[320px] h-[208px] mt-3 gap-3">
                    <h1 className="w-[208px] h-[208px] ">
                        <Image 
                        src={"/images/Image3.png"}
                        alt="pp"
                        width={208} height={208}/>
                    </h1>
                    <h2 className="w-[100px] h-[178.78px]">
                        <p className="w-[85.53px] h-[72px] font-normal text-sm leading-6">
                        Nike Air Max 97 SE Mens Shoes
                        </p>
                        <p className="w-[32px] h-[20px] font-normal text-[13px] leading-[19.6px] text-[#8D8D8D]">
                            Qty 1
                        </p>
                        <p className="w-[60px] h-[20px] font-normal text-[13px] leading-[19.6px] text-[#8D8D8D]">
                            Size UK 8
                        </p>
                        <p className="w-[72px] h-[20px] font-normal text-[13px] leading-[19.6px] text-[#8D8D8D]">
                        ₹ 16 995.00
                        </p>
                    </h2>
                </li>
            </ul>
            </div>
            
           </div>
        </div>
    )
}
export default Checkout