"use client";
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export function ShopPagination({ pageCount }: { pageCount: number }) {
   const searchParams = useSearchParams();
   const pathName = usePathname();
   const currentPage = searchParams.get("page") || 1;

   const createUrl = (pageNumber: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", pageNumber + "");
      return `${pathName}?${params.toString()}`;
   };

   return (
      <Pagination>
         <PaginationContent>
            <PaginationItem>
               <PaginationPrevious
                  href={createUrl(+currentPage - 1)}
                  className={
                     currentPage == 1
                        ? "pointer-events-none text-secondaryGray"
                        : ""
                  }
               />
            </PaginationItem>
            <PaginationItem>
               <PaginationLink href={createUrl(1)}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
               <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem
               className={`text-sm lg:text-[16px] font-bold border border-dark  py-1 px-2.5 rounded-md `}
            >
               {currentPage}
            </PaginationItem>
            <PaginationItem>
               <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
               <PaginationLink href={createUrl(pageCount)}>
                  {pageCount || 1}
               </PaginationLink>
            </PaginationItem>

            <PaginationItem>
               <PaginationNext
                  href={createUrl(+currentPage + 1)}
                  className={
                     currentPage == pageCount
                        ? "pointer-events-none text-secondaryGray"
                        : ""
                  }
               />
            </PaginationItem>
         </PaginationContent>
      </Pagination>
   );
}
