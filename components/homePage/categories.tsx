import React from "react";
import Image from "next/image";
import Link from "next/link";

function Categories() {
   const imagesUrls: string[] = [
      "/Categories/Frame1.png",
      "/Categories/Frame2.png",
      "/Categories/Frame3.png",
      "/Categories/Frame4.png",
   ];
   const images: { title: string; url: string }[] = [
      {
         title: "Casual",
         url: imagesUrls[0],
      },
      {
         title: "Formal",
         url: imagesUrls[1],
      },
      {
         title: "Party",
         url: imagesUrls[2],
      },
      {
         title: "Gym",
         url: imagesUrls[3],
      },
   ];

   return (
      <div
         className={`categories bg-gray rounded-[20px] pt-10 pb-7 px-6 flex flex-col items-center gap-7 lg:gap-16 lg:px-16 lg:py-[70px]`}
      >
         <h2 className={`text-center leading-9 `}>BROWSE BY dress STYLE</h2>
         <div
            className={`flex flex-col lg:flex-row gap-4 lg:gap-5 flex-wrap justify-center`}
         >
            {images.map((image, i) => (
               <div
                  key={i}
                  className={`cat-img shrink-0 w-[310px] h-[190px] lg:h-[290px] lg:w-[405px]`}
               >
                  <Link href={`/shop/${image.title}`} className={`relative `}>
                     <Image
                        src={image.url}
                        alt={`Casual`}
                        width={310}
                        height={190}
                        className={`w-full h-full  object-cover rounded-[20px]  `}
                     />
                     <h4 className={`satoshi absolute left-4 top-6`}>
                        {image.title}
                     </h4>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Categories;
