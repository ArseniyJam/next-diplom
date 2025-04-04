import React from "react";
import { Check } from "lucide-react";
import { useSearchParams } from "next/navigation";

function ColorsBtn({ color }: { color: string }) {
   const searchParams = useSearchParams();
   const [checked, setChecked] = React.useState<boolean>(
      !!searchParams.get("color")?.includes(color),
   );

   return (
      <label
         htmlFor={color}
         className={`h-9 w-9 rounded-full ${color === "dark" || color === "white" ? `bg-${color} border` : `bg-${color}-500`}  flex items-center justify-center`}
      >
         <input
            onChange={() => {
               setChecked(!checked);
            }}
            type="checkbox"
            className={`hidden`}
            name="color"
            value={color}
            id={color}
            checked={checked}
         />
         <Check
            className={`h-5 w-5 text-secondaryGray ${checked ? "block" : "hidden"}`}
         />
      </label>
   );
}

export default ColorsBtn;
