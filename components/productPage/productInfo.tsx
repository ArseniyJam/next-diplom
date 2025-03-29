"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuLabel,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { comments } from "@/data/data";
import Comment from "@/components/comment";
import { useWindowSize } from "usehooks-ts";
import CommentForm from "@/components/productPage/commentForm";
import { getComments, postComment } from "@/data/comment";

function RadioDropDown() {
   const [filter, setFilter] = useState("latest");
   return (
      <DropdownMenu modal={false}>
         <DropdownMenuTrigger asChild>
            <button className={`p-3 bg-gray rounded-full`}>
               <SlidersHorizontal
                  width={16}
                  height={16}
                  className={`lg:hidden`}
               />
               <span className={`hidden lg:block w-20`}>
                  {filter[0].toUpperCase() + filter.slice(1)}
               </span>
            </button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-36">
            <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
               <DropdownMenuRadioItem value="latest">
                  latest
               </DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="most rated">
                  most rated
               </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}

function ProductInfo() {
   // Добавить ограничение если pageSize > total то кнопка load more - disabled
   const [showCommentForm, setShowCommentForm] = useState(false);
   const { width = 0 } = useWindowSize();
   const [pageSize, setPageSize] = useState(width < 1024 ? 1 : 3);
   const [addToPage, setAddToPage] = useState<number>(width < 1024 ? 1 : 3);
   useEffect(() => {
      getComments(pageSize);
   }, [pageSize]);

   return (
      <div className={`mt-12`}>
         <Tabs defaultValue="details" className="">
            <TabsList className={`w-full bg-white `}>
               <TabsTrigger className={``} value="details">
                  Details
               </TabsTrigger>
               <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
               <p className={`mt-5`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
               </p>
            </TabsContent>
            <TabsContent value="reviews">
               <div className={`my-5 flex items-center justify-between`}>
                  <span>All Reviews(count)</span>
                  <div className={`flex items-center gap-2`}>
                     <RadioDropDown />
                     <button
                        className={`btn btn-sm`}
                        onClick={() => setShowCommentForm(!showCommentForm)}
                     >
                        Add a review
                     </button>
                  </div>
               </div>
               {showCommentForm && (
                  <CommentForm setShowCommentForm={setShowCommentForm} />
               )}
               <div
                  className={`grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3`}
               >
                  {comments.map((comment, index) => (
                     <Comment data={comment} key={index} showDate={true} />
                  ))}
               </div>
               <div className={`flex justify-center mt-6`}>
                  <button
                     className={`btn-outlined  !px-6`}
                     onClick={() => setPageSize(pageSize + addToPage)}
                  >
                     Load More Reviews
                  </button>
               </div>
            </TabsContent>
         </Tabs>
      </div>
   );
}

export default ProductInfo;
