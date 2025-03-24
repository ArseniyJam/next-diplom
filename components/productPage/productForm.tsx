import React, { useActionState, useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { OneProductInterface } from "@/lib/interfaces";
import { cartForm } from "@/data/cart";

function ProductForm({ prod }: { prod: OneProductInterface }) {
   const [prodCount, setProdCount] = useState(1);
   const [radioColor, setRadioColors] = useState("");
   const [radioSize, setRadioSize] = useState("");

   const [state, formAction] = useActionState(cartForm, { data: null });
   return (
      <form action={formAction} className={`lg:h-full flex flex-col`}>
         <input type="hidden" name="image" value={prod.url[0]} />
         <input type="hidden" name="title" value={prod.title} />
         <input type="hidden" name="count" value={prodCount} />
         <input
            type="hidden"
            name="price"
            value={prod.price * (1 - (prod.sale as number) / 100)}
         />

         <div className={`divider my-5`}></div>
         <div className={`flex gap-2 lg:gap-4`}>
            {prod.color.map((color, index) => (
               <div className={`colors`} key={index}>
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
                        className={`${radioColor === color ? "block" : "hidden"} h-5 w-5 text-secondaryGray `}
                     />
                  </label>
               </div>
            ))}
         </div>
         <div className={`divider my-5`}></div>
         <div className={`flex gap-2 lg:gap-4`}>
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
                  <label
                     htmlFor={size}
                     className={`block btn-sm bg-gray ${radioSize === size && "!bg-dark text-white"}`}
                  >
                     {size}
                  </label>
               </div>
            ))}
         </div>
         <div className={`divider my-5`}></div>
         <div className={`flex items-center gap-3 lg:grow lg:items-end`}>
            <div
               className={`h-[48px] lg:h-[51gpx] px-4 bg-gray rounded-full inline-flex gap-2 lg:gap-12 items-center`}
            >
               <button
                  type={"button"}
                  onClick={() => setProdCount(prodCount - 1)}
                  className={
                     prodCount <= 1 ? "pointer-events-none text-dark/30" : ""
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
               type="submit"
               className={`btn grow ${!radioColor || !radioSize ? "!pointer-events-none !bg-black/50" : ""}`}
            >
               Add to Cart
            </button>
         </div>
      </form>
   );
}

export default ProductForm;
