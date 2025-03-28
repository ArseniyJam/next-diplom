import React, { useActionState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Check } from "lucide-react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getFilteredProducts } from "@/data/loader";
import SizeBtn from "@/components/sizeBtn";
import ColorsBtn from "@/components/colorsBtn";

function GenerateSimpleCheckBoxes({
   value,
   name,
   disabled = false,
}: {
   value: string;
   name: string;
   disabled?: boolean;
}) {
   const [checked, setChecked] = React.useState<boolean>(disabled ?? false);

   return (
      <div className={``}>
         <label
            htmlFor={value}
            className={`flex items-center justify-between ${disabled ? "opacity-50 pointer-events-none" : ""}`}
         >
            {value}
            <input
               className={`hidden`}
               type="checkbox"
               name={name}
               id={value}
               value={value}
               checked={checked}
               onChange={() => setChecked(!checked)}
            />
            <span
               className={`border-2 border-dark w-4 h-4  rounded flex items-center justify-center `}
            >
               <Check className={checked ? "block" : "hidden"} />
            </span>
         </label>
      </div>
   );
}

function FilterContent() {
   const pathname = usePathname();

   const categoryFromPathname = () => {
      const cat = pathname.split("/");
      return cat[2];
   };

   const clothingType = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
   const color = ["red", "green", "blue", "orange", "white", "dark"];
   const size = ["xs", "sm", "md", "lg", "xl"];
   const style = ["Casual", "Formal", "Party", "Gym"];

   const [price, setPrice] = React.useState<number>(200);

   const [state, formAction] = useActionState(getFilteredProducts, {
      data: null,
   });
   const router = useRouter();
   const pathName = usePathname();

   useEffect(() => {
      if (state.data) {
         router.replace(`${pathName}?${state.data}`);
      }
   }, [state]);

   return (
      <div className={`p-5 h-full`}>
         <h4 className={`satoshi`}>Filters</h4>
         <div className={`divider my-4`}></div>
         <form action={formAction}>
            <div className={`flex flex-col gap-1`}>
               {clothingType.map((item, index) => (
                  <GenerateSimpleCheckBoxes
                     value={item}
                     name={"type"}
                     key={index}
                  />
               ))}
            </div>
            <div className={`divider my-4`}></div>
            <div className={`flex flex-col `}>
               <h4 className={`satoshi`}>Price</h4>
               <Slider
                  defaultValue={[price]}
                  max={300}
                  step={1}
                  onChange={(event: any) => setPrice(event.target.value)}
                  className={`my-1`}
               />
               <input type="hidden" name="price" value={price} />
               <div className={`flex justify-between`}>
                  <span>0$</span>
                  <span>{price}$</span>
                  <span>300$</span>
               </div>
            </div>
            <div className={`divider my-4`}></div>
            <div className={`flex gap-4 flex-wrap`}>
               {color.map((color, index) => (
                  <ColorsBtn color={color} key={index} />
               ))}
            </div>
            <div className={`divider my-4`}></div>
            <div className={`flex gap-2 flex-wrap`}>
               {size.map((size, index) => (
                  <SizeBtn size={size} key={index} />
               ))}
            </div>
            <div className={`divider my-4`}></div>
            {pathname.includes("/all") && (
               <div className={`flex flex-col gap-1`}>
                  {style.map((item, index) => (
                     <GenerateSimpleCheckBoxes
                        value={item}
                        name={"style"}
                        key={index}
                     />
                  ))}
               </div>
            )}
            {!pathname.includes("/all") && (
               <GenerateSimpleCheckBoxes
                  value={categoryFromPathname()}
                  name={"style"}
                  disabled={true}
               />
            )}

            <button type="submit" className={`btn w-full mt-10`}>
               Apply
            </button>
         </form>
         <div
            className={`hidden bg-red-500 bg-green-500 bg-orange-500 bg-dark bg-gray bg-blue-500`}
         ></div>
      </div>
   );
}

export default FilterContent;
