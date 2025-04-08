import React, {
   Dispatch,
   SetStateAction,
   useActionState,
   useEffect,
   useState,
} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Star, StarHalf, X } from "lucide-react";
import { postComment } from "@/data/comment";
import SubmitButton from "@/components/submitButton";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserInterface } from "@/lib/interfaces";

function StarPicker({
   setRating,
   rating,
}: {
   setRating: (value: number) => void;
   rating: number;
}) {
   const arr = [1, 2, 3, 4, 5];
   return (
      <div className={`flex gap-2 items-center`}>
         <div className={`flex`}>
            {arr.map((item) => (
               <button
                  key={item}
                  onClick={() => setRating(item)}
                  className={item <= rating ? "text-[#FFC633]" : ""}
               >
                  <Star />
               </button>
            ))}
         </div>
         <Plus height={16} />
         <button
            className={rating === 5 ? "pointer-events-none text-secondary" : ""}
         >
            <StarHalf
               onClick={() => setRating(rating + 0.5)}
               className={rating % 1 !== 0 ? "text-[#FFC633]" : ""}
            />
         </button>
      </div>
   );
}

function CommentForm({
   setShowCommentForm,
   user,
   prodId,
   setNewCommentFlag,
}: {
   setShowCommentForm: (value: boolean) => void;
   user: UserInterface;
   prodId: number;
   setNewCommentFlag: Dispatch<SetStateAction<number>>;
}) {
   const path = usePathname();

   const [rating, setRating] = useState<number>(0);
   const [state, action] = useActionState(postComment, { data: null });

   useEffect(() => {
      if (state.data) {
         setNewCommentFlag((prev: number) => ++prev);
         setShowCommentForm(false);
      }
   }, [state]);

   return (
      <div>
         <Card className={` lg:max-w-[50vw] mx-auto mb-6`}>
            <CardHeader className={`flex flex-row justify-between`}>
               <CardTitle>Write your own review</CardTitle>
               <button onClick={() => setShowCommentForm(false)}>
                  <X />
               </button>
            </CardHeader>
            {!user.ok && (
               <CardContent
                  className={`flex justify-center items-center min-h-[150px]`}
               >
                  <Link
                     href="/auth/register"
                     className={`!text-2xl font-bold underline`}
                  >
                     Sign In
                  </Link>
               </CardContent>
            )}
            {user.ok && (
               <CardContent className={`flex flex-col gap-4`}>
                  <StarPicker setRating={setRating} rating={rating} />
                  <form action={action} className={`flex flex-col gap-4`}>
                     <input
                        className={`hidden`}
                        name={`path`}
                        defaultValue={path}
                     />
                     <input
                        className={`hidden`}
                        name={`id`}
                        defaultValue={prodId}
                     />
                     <Input
                        type={`text`}
                        defaultValue={user?.data?.username}
                        name={`username`}
                        className={`pointer-events-none`}
                     />
                     <Input
                        type={`text`}
                        className={`w-20 pointer-events-none`}
                        value={rating}
                        readOnly={true}
                        name={`rating`}
                     />
                     <Textarea name={`content`} />
                     <SubmitButton
                        text={`Post`}
                        classNames={`btn lg:w-1/3 mx-auto ${rating === 0 ? "pointer-events-none !bg-black/50" : ""}`}
                     />
                  </form>
               </CardContent>
            )}
         </Card>
      </div>
   );
}

export default CommentForm;
