import React from "react";
import Image from "next/image";

function HeroBrands() {
   const brandUrls = [
      "/hero/Vector1.svg",
      "/hero/Vector2.svg",
      "/hero/Vector3.svg",
      "/hero/Vector4.svg",
      "/hero/Vector5.svg",
   ];
   return (
      <div className={`-mx-4  xl:-mx-[100px]  `}>
         <div
            className={`py-10 bg-black flex flex-wrap gap-5 justify-center px-4`}
         >
            {brandUrls.map((url, i) => (
               <div key={i}>
                  <Image
                     height={21}
                     width={100}
                     src={url}
                     alt="brand"
                     className={`h-[21px] lg:w-[120px] px-2`}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}

export default HeroBrands;
