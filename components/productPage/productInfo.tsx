"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RefObject, useEffect, useRef, useState } from "react";
import { Loader2, SlidersHorizontal } from "lucide-react";

import Comment from "@/components/comment";
import { useWindowSize } from "usehooks-ts";
import CommentForm from "@/components/productPage/commentForm";
import { getComments, postComment } from "@/data/comment";
import { CommentInterface } from "@/lib/interfaces";

function RadioDropDown({
   filter,
   setFilter,
}: {
   filter: string;
   setFilter: any;
}) {
   console.log(filter);
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
               <DropdownMenuRadioItem value="createdAt">
                  latest
               </DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="rating">
                  most rated
               </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}

function ProductInfo({
   details,
   documentId,
}: {
   details: string;
   documentId: string;
}) {
   const [showCommentForm, setShowCommentForm] = useState(false);
   const { width = 0 } = useWindowSize();
   const [pageSize, setPageSize] = useState(width < 1024 ? 1 : 3);
   const [addToPage, setAddToPage] = useState<number>(width < 1024 ? 1 : 3);

   const [filter, setFilter] = useState("createdAt");

   const commentsRef: RefObject<HTMLDivElement | null> = useRef(null);

   const [data, setData] = useState([]);
   const [loading, setLoading] = useState<boolean>(false);
   const [total, setTotal] = useState<number>(0);
   useEffect(() => {
      getComments(pageSize, documentId, filter).then((res) => {
         setData(res.data);
         setTotal(res.meta.pagination.total);
         setLoading(false);

         console.log(res);
      });
   }, [pageSize, filter]);

   const handleClick = () => {
      setPageSize(pageSize + addToPage);
      setLoading(true);
      commentsRef?.current?.scrollIntoView({
         behavior: "smooth",
      });
   };

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
               <p className={`my-5`}>{details}</p>
            </TabsContent>
            <TabsContent value="reviews" className={`mb-5`}>
               <div className={`my-5 flex items-center justify-between`}>
                  <span>All Reviews(count)</span>
                  <div className={`flex items-center gap-2`}>
                     <RadioDropDown filter={filter} setFilter={setFilter} />
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
                  ref={commentsRef}
                  className={`grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3`}
               >
                  {data &&
                     data.map((comment: CommentInterface, index) => (
                        <Comment data={comment} key={index} showDate={true} />
                     ))}
               </div>
               <div className={`flex justify-center mt-6`}>
                  <button
                     className={`btn-outlined  !px-6 flex gap-1 items-center w-[216px] justify-center ${pageSize >= total ? "opacity-50 pointer-events-none" : ""}`}
                     onClick={handleClick}
                  >
                     {loading && (
                        <Loader2
                           className={`animate-spin`}
                           width={20}
                           height={20}
                        />
                     )}
                     Load More Reviews
                  </button>
               </div>
            </TabsContent>
         </Tabs>
      </div>
   );
}

export default ProductInfo;
