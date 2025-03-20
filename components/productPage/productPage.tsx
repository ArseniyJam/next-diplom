"use client";
import Image from "next/image";
import React, { useActionState, useState } from "react";
import RatingStars from "@/components/ratingStars";
import Price from "@/components/price";
import { OneProductInterface } from "@/lib/interfaces";
import { Check, Minus, Plus } from "lucide-react";
import { addToCart } from "@/data/cart";

function ProductPage({ prod }: { prod: OneProductInterface }) {
   const [prodCount, setProdCount] = useState(1);
   const [activeUrl, setActiveUrl] = useState(prod.url[0]);
   const [radioColor, setRadioColors] = useState("");
   const [radioSize, setRadioSize] = useState("");

   const chooseActiveUrl = (url: string) => {
      setActiveUrl(url);
   };

   const [state, formAction] = useActionState(addToCart, { data: null });
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
            <form action={formAction}>
               <input type="hidden" name="image" value={prod.url[0]} />
               <input type="hidden" name="title" value={prod.title} />
               <input type="hidden" name="count" value={prodCount} />

               <div className={`divider my-5`}></div>
               <div className={`flex gap-2`}>
                  {prod.color.map((color, index) => (
                     <div className={`prodPage colors`} key={index}>
                        <label
                           htmlFor={color}
                           className={`h-9 w-9 rounded-full ${color === "dark" || color === "white" ? `bg-${color} border` : `bg-${color}-500`}  flex items-center justify-center`}
                        >
                           <input
                              type="radio"
                              className={`hidden`}
                              name="color"
                              value={color}
                              id={color}
                              defaultChecked={radioColor === color}
                              onChange={(e) => {
                                 setRadioColors(e.target.value);
                              }}
                           />
                           <Check
                              className={`check h-5 w-5 text-secondaryGray  hidden `}
                           />
                        </label>
                     </div>
                  ))}
               </div>
               <div className={`divider my-5`}></div>
               <div className={`flex gap-2`}>
                  {prod.size.map((size, index) => (
                     <div key={index}>
                        <input
                           onChange={(e) => {
                              setRadioSize(e.target.value);
                           }}
                           defaultChecked={radioSize === size}
                           type="radio"
                           id={size}
                           value={size}
                           name={`size`}
                           className={`hidden`}
                        />
                        <label htmlFor={size} className={`btn-sm bg-gray`}>
                           {size}
                        </label>
                     </div>
                  ))}
               </div>
               <div className={`divider my-5`}></div>
               <div className={`flex items-center gap-3`}>
                  <div
                     className={`py-3 px-4 bg-gray rounded-full inline-flex gap-2 items-center `}
                  >
                     <button
                        type={"button"}
                        onClick={() => setProdCount(prodCount - 1)}
                        className={
                           prodCount === 1
                              ? "pointer-events-none text-dark/30"
                              : ""
                        }
                     >
                        <Minus />
                     </button>
                     <span className={` text-lg`}>{prodCount}</span>
                     <button
                        type={"button"}
                        onClick={() => setProdCount(prodCount + 1)}
                     >
                        <Plus />
                     </button>
                  </div>
                  <button
                     onClick={(e) => {
                        setProdCount(1);
                     }}
                     type="submit"
                     className={`btn grow ${!radioColor || !radioSize ? "!pointer-events-none !bg-black/50" : ""}`}
                  >
                     Add to Cart
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default ProductPage;
