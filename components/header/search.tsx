import React, { useState } from "react";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function HeaderSearch({ searchActive }: { searchActive: boolean }) {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const router = useRouter();

   const handleChange = useDebouncedCallback((inputValue: string) => {
      const params = new URLSearchParams(searchParams);
      if (!inputValue) {
         params.delete("search");
      } else {
         params.set("search", inputValue);
      }
      params.set("page", "1");

      router.replace(`${pathname}?${params.toString()}`);
   }, 300);
   return (
      <div
         className={`lg:block top-28 lg:top-0 lg:mx-0 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 max-w-4xl w-[80vw] lg:w-full ${searchActive ? "absolute" : "hidden"}`}
      >
         <div className={`lg:relative`}>
            <input
               onFocus={() => {
                  if (!pathname.startsWith("/shop")) {
                     router.push(`/shop/all + ${searchParams.toString()}`);
                  }
               }}
               type="text"
               onChange={(event) => handleChange(event.target.value)}
               defaultValue={searchParams.get("search") ?? ""}
               placeholder={`Search for products...`}
               className={`rounded-[62px] bg-gray grow px-4 py-3 ps-[52px] outline outline-mutedGray shadow-md lg:shadow-none lg:border-none w-full focus:outline-2 `}
            />

            <Search color={"#999999"} className={`absolute top-3 left-4 `} />
         </div>
      </div>
   );
}

export default HeaderSearch;
