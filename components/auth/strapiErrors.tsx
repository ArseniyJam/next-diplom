import React from "react";
import { StrapiErrorsProps } from "@/lib/interfaces";

function StrapiErrors({ error }: { error: StrapiErrorsProps }) {
   if (!error?.message) return null;
   return (
      <div className="text-red-500 font-medium text-sm pt-1 text-center">
         {error.message}
      </div>
   );
}

export default StrapiErrors;
