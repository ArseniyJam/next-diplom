import React from "react";
import { Loader2 } from "lucide-react";

function Loading() {
   return (
      <div className={`grow grid place-items-center animate-spin`}>
         <Loader2 width={60} height={60} />
      </div>
   );
}

export default Loading;
