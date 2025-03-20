"use client";
import Image from "next/image";
import { oneProduct } from "@/data/data";
import { useState } from "react";
import RatingStars from "@/components/ratingStars";
import Price from "@/components/price";
import { OneProductInterface } from "@/lib/interfaces";

function ProductPage({ prod }: { prod: OneProductInterface }) {
   const [activeUrl, setActiveUrl] = useState(prod.url[0]);
   const chooseActiveUrl = (url: string) => {
      setActiveUrl(url);
   };
   return (
      <div className={`pt-5 flex flex-col gap-5`}>
         <div className={`flex flex-col items-center gap-3`}>
            <div>
               <Image
                  src={activeUrl}
                  alt={"active image"}
                  width={358}
                  height={290}
                  className={`rounded-[20px] h-[290px] object-cover`}
               />
            </div>
            <div className={`flex gap-3 justify-center`}>
               {prod.url.map((url, index) => (
                  <Image
                     onClick={() => chooseActiveUrl(url)}
                     src={url}
                     key={index}
                     alt={prod.title}
                     width={110}
                     height={105}
                     className={`rounded-[20px] object-cover h-[105px] ${activeUrl === url ? "border border-dark" : ""}`}
                  />
               ))}
            </div>
         </div>
         <div>
            <div className={`flex flex-col gap-3`}>
               <h4>{prod.title}</h4>
               <RatingStars rating={prod.rating} />
               <Price
                  price={prod.price}
                  sale={prod.sale}
                  fontSize={`h4`}
                  gapSize={`gap-2`}
                  badgeClasses={`!text-sm py-1.5 px-3`}
               />
               <p className={`mt-1`}>{prod.description}</p>
            </div>
         </div>
      </div>
   );
}

export default ProductPage;
