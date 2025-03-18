import React from "react";

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
                  <img src={url} alt="brand" className={`h-[21px] px-2`} />
               </div>
            ))}
         </div>
      </div>
   );
}

export default HeroBrands;
