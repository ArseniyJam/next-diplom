import React from "react";

function SizeBtn({ size }: { size: string }) {
   const [checked, setChecked] = React.useState<boolean>(false);

   return (
      <label htmlFor={size}>
         <input
            onChange={() => setChecked(!checked)}
            type={`checkbox`}
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
