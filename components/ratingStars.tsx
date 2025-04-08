import React from "react";
import { Star, StarHalf } from "lucide-react";

function RatingStars({
   rating,
   starSize = "h-5 lg:h-7",
   ratingSize = "text-xs lg:text-sm",
}: {
   rating: number;
   starSize?: string;
   ratingSize?: string;
}) {
   const arr = Array.from(
      Array(rating % 1 < 0.75 ? Math.floor(rating) : Math.ceil(rating)).keys(),
   );

   return (
      <div className={`flex text-[#FFC633] items-center lg:gap-1`}>
         {arr.map((n: number, index: number) => (
            <div key={index}>
               <Star className={`${starSize}`} />
            </div>
         ))}
         {rating % 1 >= 0.25 && rating % 1 < 0.75 && (
            <StarHalf className={`${starSize}`} />
         )}
         <span className={`text-dark ${ratingSize}`}>{rating}/5</span>
      </div>
   );
}

export default RatingStars;
