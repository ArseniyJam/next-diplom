import React from "react";
import { Mail } from "lucide-react";

function FooterBadge() {
   return (
      <div className={`w-[90vw] lg:w-[86vw]`}>
         <div
            className={`bg-black rounded-[20px] px-6 py-8 lg:py-9 lg:px-16 text-white lg:flex lg:justify-between lg:items-center `}
         >
            <h3 className={`max-w-[550px] 2xl:max-w-none`}>
               STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h3>
            <div className={`relative`}>
               <input
                  type="email"
                  placeholder={`Enter your email address`}
                  name=""
                  id=""
                  className={`mt-8 lg:mt-0 mb-3 lg:mb-4 w-full py-3 bg-white rounded-full text-secondary ps-12 lg:ps-14 placeholder:text-secondaryGray`}
               />
               <div className={`absolute top-11 lg:top-3 left-4 lg:left-5`}>
                  <Mail color={`#666666`} />
               </div>
               <button
                  type={"submit"}
                  className={`w-full py-3 bg-white rounded-full text-black font-medium`}
               >
                  Subscribe to Newsletter
               </button>
            </div>
         </div>
      </div>
   );
}

export default FooterBadge;
