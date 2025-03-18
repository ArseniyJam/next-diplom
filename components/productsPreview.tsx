import Link from "next/link";
import { ProdCardInterface } from "@/lib/interfaces";
import ProdCard from "@/components/prodCard";

function ProductsPreview({
   header,
   data,
}: {
   header: string;
   data: ProdCardInterface[];
}) {
   return (
      <div className={`py-[40px] lg:py-[72px]`}>
         <div className={`flex flex-col items-center gap-6 lg:gap-9`}>
            <h2 className={`lg:mb-4`}>{header}</h2>
            <div
               className={`flex overflow-x-scroll lg:overflow-x-auto gap-4 lg:gap-5 justify-center w-full`}
            >
               {data.map((product, index) => (
                  <ProdCard {...product} key={index} />
               ))}
            </div>
            <Link href={`/`} className={`btn-outlined`}>
               View All
            </Link>
         </div>
      </div>
   );
}

export default ProductsPreview;
