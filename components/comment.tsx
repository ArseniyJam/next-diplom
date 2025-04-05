import React from "react";
import { CommentInterface } from "@/lib/interfaces";
import RatingStars from "@/components/ratingStars";
import { CheckCircle2 } from "lucide-react";
import moment from "moment";

function Comment({
   data,
   showDate = false,
}: {
   data: CommentInterface;
   showDate?: boolean;
}) {
   return (
      <div className="p-6 border border-mutedGray rounded-[20px]">
         <div className={`flex flex-col gap-2`}>
            <RatingStars rating={data.rating} />
            <div className={`flex items-center text-[16px] gap-1 font-bold`}>
               {data.username}
               <CheckCircle2 className={`text-green-500`} />
            </div>
            <p className={`min-h-[100px] lg:min-h-[110px]`}>{data.content}</p>
            {showDate && (
               <div
                  className={`mt-2 text-sm text-black/60`}
               >{`Posted on ${moment(data.createdAt).format("MMMM Do YYYY, h:mm a")}`}</div>
            )}
         </div>
      </div>
   );
}

export default Comment;
