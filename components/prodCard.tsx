import React from "react";
import { ProdCardInterface } from "@/lib/interfaces";
import Image from "next/image";
import RatingStars from "@/components/ratingStars";
import Price from "@/components/price";
import Link from "next/link";

function ProdCard({
   url,
   sale = null,
   rating,
   price,
   title,
}: ProdCardInterface) {
   return (
      <Link
         href={`/shop/futureCategory/futureId`}
         className={`flex flex-col gap-1 lg:gap-2 shrink-0 `}
      >
         <Image
            src={url}
            alt={title}
            width={160}
            height={160}
            className={`mb-1.5 lg:mb-2 h-[165px] lg:w-[290px] lg:h-[295px] rounded-[12px] lg:rounded-[20px]`}
         />
         <div
            className={`font-bold max-w-[150px] leading-5 h-[36px] lg:text-xl lg:max-w-none lg:h-auto text-sm`}
         >
            {title}
         </div>
         <RatingStars rating={rating} />
         <Price price={price} sale={sale} />
      </Link>
   );
}

export default ProdCard;
