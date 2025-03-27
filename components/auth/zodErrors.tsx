import React from "react";

function ZodErrors({ error }: { error: string[] }) {
   if (!error) return null;
   return (
      <div>
         {error.map((err: string, index: number) => (
            <div key={index} className={`text-red-500 text-sm py-1`}>
               {err}
            </div>
         ))}
      </div>
   );
}

export default ZodErrors;
