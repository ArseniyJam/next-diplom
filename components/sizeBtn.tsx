import { useSearchParams } from "next/navigation";
import { useState } from "react";

function SizeBtn({ size }: { size: string }) {
   const searchParams = useSearchParams();
   const [checked, setChecked] = useState<boolean>(
      !!searchParams.get("size")?.includes(size),
   );

   return (
      <label htmlFor={size} className={`relative`}>
         <input
            onChange={() => setChecked(!checked)}
            type="checkbox"
            id={size}
            value={size}
            name={`size`}
            className={`absolute w-full opacity-0 lg:hidden`}
            checked={checked}
         />
         <span
            className={`btn-sm block  ${checked ? "bg-black text-white" : "bg-gray"}`}
         >
            {size}
         </span>
      </label>
   );
}

export default SizeBtn;
