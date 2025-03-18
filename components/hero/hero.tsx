import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBrands from "@/components/hero/heroBrands";

function Hero() {
   return (
      <div className={``}>
         <div
            className={`bg-gray -mx-4  xl:-mx-[100px] xl:px-[100px] px-4 pt-10 lg:pt-0`}
         >
            <div
               className={`flex flex-col lg:flex-row lg:gap-10 2xl:gap-32 lg:items-center lg:justify-center `}
            >
               <div
                  className={`flex flex-col gap-5 xl:gap-[32px] lg:max-w-[600px] `}
               >
                  <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                  <p className={`text-wrap `}>
                     Browse through our diverse range of meticulously crafted
                     garments, designed to bring out your individuality and
                     cater to your sense of style.
                  </p>
                  <Link href={"/public"} className={`btn lg:self-start`}>
                     Shop Now
                  </Link>
                  <div
                     className={`hero-info grid grid-cols-2 gap-3  justify-items-center lg:grid-cols-3 lg:gap-16`}
                  >
                     <div className={`relative`}>
                        <span>200+</span>
                        <p>International Brands</p>
                        <div
                           className={`hidden lg:block absolute  h-[74px] w-px bg-black/10   -right-[31.5px] top-0`}
                        ></div>
                     </div>
                     <div className={`relative`}>
                        <span>2,000+</span>
                        <p>High-Quality Products</p>
                        <div
                           className={`hidden lg:block absolute h-[74px]  w-px bg-black/10 -right-[31.5px] top-0`}
                        ></div>
                     </div>
                     <div className={`col-span-2 lg:col-span-1 relative`}>
                        <span>30,000+</span>
                        <p>Happy Customers</p>
                        <div
                           className={`block lg:hidden absolute h-[52px] w-px bg-black/10 -top-[calc(100%+12px)]  left-1/2`}
                        ></div>
                     </div>
                  </div>
               </div>
               <div
                  className={`flex justify-center  relative  items-end -mx-4 lg:-mx-0`}
               >
                  <Image
                     src={"/hero/main.png"}
                     width={390}
                     height={448}
                     alt={"a"}
                     className={`xl:min-w-[580px] 2xl:min-w-[680px] xl:h-[calc(100vh-246px)]`}
                  />
                  <div
                     className={`absolute h-[76px] lg:h-[104px] aspect-square right-1 top-10`}
                  >
                     <img src="/hero/blackStar.png" alt="" />
                  </div>
                  <div
                     className={`absolute h-[44px] lg:h-[56px] aspect-square left-2 top-32 lg:top-44 xl:top-64`}
                  >
                     <img src="/hero/blackStar.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
         <HeroBrands />
      </div>
   );
}

export default Hero;
