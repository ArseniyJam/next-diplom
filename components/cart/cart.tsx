import React from "react";
import { ProdCartInterface } from "@/lib/interfaces";
import { Card, CardContent } from "@/components/ui/card";
import CartItem from "@/components/cart/cartItem";

function Cart({ products }: { products: ProdCartInterface[] | null }) {
   return (
      <div>
         <h2 className={`my-2`}>Your Cart</h2>
         <Card className={`py-3 max-w-[800px]`}>
            <CardContent className={` px-3`}>
               <div className={`flex flex-col`}>
                  {products &&
                     products.map((product, index) => (
                        <div key={index} className={`card-item`}>
                           <CartItem product={product} />
                           <div className={`divider my-3`}></div>
                        </div>
                     ))}
               </div>
            </CardContent>
         </Card>
      </div>
   );
}

export default Cart;
