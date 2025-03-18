import React from "react";
import { Star, StarHalf } from "lucide-react";

function RatingStars({ rating }: { rating: number }) {
   let arr: any = Array.from({
      length: rating % 1 < 0.75 ? Math.floor(rating) : Math.ceil(rating),
   }).fill(0);

   return (
      <div className={`flex text-[#FFC633] items-center lg:gap-1`}>
         {arr.map((n: number, index: number) => (
            <div key={index}>
               <Star className={`h-5 lg:h-7`} />
            </div>
         ))}
         {rating % 1 >= 0.25 && rating % 1 < 0.75 && (
            <StarHalf className={`h-5 lg:h-7`} />
         )}
         <span className={`text-dark text-xs lg:text-sm`}>{rating}/5</span>
      </div>
   );
}

export default RatingStars;
