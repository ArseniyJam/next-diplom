import React from "react";
import { CommentInterface } from "@/lib/interfaces";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import Comment from "@/components/comment";

function CarouselComments({ comments }: { comments: CommentInterface[] }) {
   return (
      <div className={`pt-12  flex flex-col gap-4`}>
         <h3>OUR HAPPY CUSTOMERS</h3>
         <Carousel>
            <CarouselContent>
               {comments.map((comment: CommentInterface, index: number) => (
                  <CarouselItem key={index} className={`lg:basis-1/3`}>
                     <Comment data={comment} />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious
               className={`absolute -top-9 left-[calc(100%-80px)]`}
            />
            <CarouselNext className={`absolute -top-9 right-0`} />
         </Carousel>
      </div>
   );
}

export default CarouselComments;
