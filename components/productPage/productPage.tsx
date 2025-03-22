"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import RatingStars from "@/components/ratingStars";
import Price from "@/components/price";
import { OneProductInterface } from "@/lib/interfaces";

import ProductForm from "@/components/productPage/productForm";
import ProductsPreview from "@/components/productsPreview";
import { products2 } from "@/data/data";
import ProductInfo from "@/components/productPage/productInfo";

function ProductPage({ prod }: { prod: OneProductInterface }) {
   const [activeUrl, setActiveUrl] = useState(prod.url[0]);

   const chooseActiveUrl = (url: string) => {
      setActiveUrl(url);
   };

   return (
      <div>
         <div
            className={`pt-5 flex flex-col gap-5 lg:flex-row lg:gap-10 2xl:justify-center`}
         >
            <div className={`flex flex-col items-center gap-3 lg:flex-row`}>
               <div className={`lg:order-1 `}>
                  <Image
                     src={activeUrl}
                     alt={"active image"}
                     width={358}
                     height={290}
                     className={`rounded-[20px] h-[290px] object-cover  lg:h-[530px] lg:w-[440px]`}
                  />
               </div>
               <div className={`flex gap-3 justify-center lg:flex-col `}>
                  {prod.url.map((url, index) => (
                     <Image
                        onClick={() => chooseActiveUrl(url)}
                        src={url}
                        key={index}
                        alt={prod.title}
                        width={110}
                        height={105}
                        className={`rounded-[20px] object-cover h-[105px] lg:h-[168px] lg:w-[152px] ${activeUrl === url ? "border border-dark" : ""}`}
                     />
                  ))}
               </div>
            </div>
            <div className={`lg:flex lg:flex-col lg:w-[46vw]`}>
               <div className={`flex flex-col gap-3 `}>
                  <h3>{prod.title}</h3>
                  <RatingStars
                     rating={prod.rating}
                     starSize={`lg:h-9 lg:w-9`}
                     ratingSize={`lg:text-xl`}
                  />
                  <Price
                     price={prod.price}
                     sale={prod.sale}
                     fontSize={`h4`}
                     gapSize={`gap-2`}
                     badgeClasses={`!text-sm lg:!text-[16px] py-1.5 px-3 lg:px-4`}
                  />
                  <p className={`mt-1`}>{prod.description}</p>
               </div>
               <ProductForm prod={prod} />
            </div>
         </div>
         <div>
            <ProductInfo />
         </div>
         <div className={`-mb-8 lg:-mb-16`}>
            <ProductsPreview
               header={`You might also like`}
               data={products2}
               linkBtn={false}
            />
         </div>
      </div>
   );
}

export default ProductPage;
