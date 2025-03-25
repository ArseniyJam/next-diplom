"use client";
import React, { useState } from "react";
import { ProdCartInterface } from "@/lib/interfaces";
import Image from "next/image";
import { Minus, Plus, TrashIcon } from "lucide-react";
import { changeCartItemCount, deleteCartItem } from "@/data/cart";

function CartItem({ product }: { product: ProdCartInterface }) {
   return (
      <div className={`flex gap-3 `}>
         <div>
            <Image
               src={product.image}
               alt={product.title}
               width={100}
               height={100}
               className={`rounded-lg h-full object-cover`}
            />
         </div>
         <div className={`flex flex-col w-full`}>
            <div className={`flex justify-between items-center `}>
               <span className={`font-bold  `}>{product.title}</span>
               <button onClick={() => deleteCartItem(product)}>
                  <TrashIcon height={18} className={`text-red-500`} />
               </button>
            </div>
            <div className={`text-xs flex flex-col gap-0.5 text-secondary`}>
               <span>{"Size:" + product.size}</span>
               <span>{"Color:" + product.color}</span>
            </div>
            <div className={`flex justify-between items-center`}>
               <span className={`text-2xl font-bold`}>
                  {"$" + product.price}
               </span>
               <div>
                  <div
                     className={`h-[32px]  lg:h-[51px] px-4 bg-gray rounded-full inline-flex gap-2 lg:gap-12 items-center`}
                  >
                     <button
                        type={"button"}
                        onClick={() => {
                           changeCartItemCount(product, +product.count - 1);
                        }}
                        className={
                           +product.count <= 1
                              ? "pointer-events-none text-dark/30"
                              : ""
                        }
                     >
                        <Minus />
                     </button>
                     <span className={` lg:text-lg`}>{product.count}</span>
                     <button
                        type={"button"}
                        onClick={() => {
                           changeCartItemCount(product, +product.count + 1);
                        }}
                     >
                        <Plus />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CartItem;
