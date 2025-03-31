import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

function SizeBtn({ size }: { size: string }) {
   const searchParams = useSearchParams();
   const [checked, setChecked] = React.useState<boolean>(
      !!searchParams.get("size")?.includes(size),
   );

   return (
      <label htmlFor={size}>
         <input
            onChange={() => setChecked(!checked)}
            type="checkbox"
            id={size}
            value={size}
            name={`size`}
            className={`hidden`}
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
