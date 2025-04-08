"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
   Dispatch,
   RefObject,
   SetStateAction,
   useEffect,
   useRef,
   useState,
} from "react";
import { Loader2, SlidersHorizontal } from "lucide-react";

import Comment from "@/components/comment";
import { useWindowSize } from "usehooks-ts";
import CommentForm from "@/components/productPage/commentForm";
import { getComments } from "@/data/comment";
import { CommentInterface, UserInterface } from "@/lib/interfaces";
import { getMe } from "@/services/get-me";

function RadioDropDown({
   filter,
   setFilter,
}: {
   filter: string;
   setFilter: Dispatch<SetStateAction<string>>;
}) {
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
                  {filter === "createdAt" ? "Latest" : "Most rated"}
               </span>
            </button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-36">
            <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
               <DropdownMenuRadioItem value="createdAt">
                  Latest
               </DropdownMenuRadioItem>
               <DropdownMenuRadioItem value="rating">
                  Most rated
               </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}

function ProductInfo({
   details,
   documentId,
   prodId,
}: {
   details: string;
   documentId: string;
   prodId: number;
}) {
   const [showCommentForm, setShowCommentForm] = useState(false);
   const { width = 0 } = useWindowSize();
   const [pageSize, setPageSize] = useState(width < 1024 ? 1 : 3);
   const addToPage: number = width < 1024 ? 1 : 3;

   const [filter, setFilter] = useState("createdAt");

   const commentsRef: RefObject<HTMLDivElement | null> = useRef(null);

   const [data, setData] = useState([]);
   const [loading, setLoading] = useState<boolean>(false);
   const [total, setTotal] = useState<number>(0);
   const [newCommentFlag, setNewCommentFlag] = useState<number>(0);
   useEffect(() => {
      getComments(pageSize, documentId, filter).then((res) => {
         setData(res.data);
         setTotal(res.meta.pagination.total);
         setLoading(false);
      });
   }, [pageSize, filter, newCommentFlag]);

   const handleClick = () => {
      setPageSize(pageSize + addToPage);
      setLoading(true);
      commentsRef?.current?.scrollIntoView({
         behavior: "smooth",
      });
   };

   const [user, setUser] = useState<UserInterface>({
      ok: false,
      data: null,
      error: null,
   });
   useEffect(() => {
      getMe().then((res) => {
         setUser(res);
      });
   }, []);

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
                  <CommentForm
                     setShowCommentForm={setShowCommentForm}
                     setNewCommentFlag={setNewCommentFlag}
                     prodId={prodId}
                     user={user}
                  />
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
