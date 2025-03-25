import React from "react";
import { ProdCartInterface } from "@/lib/interfaces";
import { Card, CardContent } from "@/components/ui/card";
import CartItem from "@/components/cart/cartItem";

function Cart({ products }: { products: ProdCartInterface[] | null }) {
   const sum = products?.reduce((acc, cur) => acc + +cur.price * +cur.count, 0);
   const discount = 20;
   const delivery = 15;
   const discouted = sum - sum * (1 - discount / 100);

   return (
      <div>
         <h2 className={`my-2`}>Your Cart</h2>
         <div
            className={`flex flex-col lg:flex-row gap-4 justify-center lg:items-start`}
         >
            <Card className={`py-3 max-w-[800px] grow`}>
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
            <Card className={`py-3 max-w-[500px] grow `}>
               <CardContent className={`flex flex-col gap-2 px-3`}>
                  <div className={`text-2xl font-bold`}>Order Summary</div>
                  <div className={`flex items-center justify-between`}>
                     <p>Subtotal</p>
                     <span className={`font-bold`}>${sum}</span>
                  </div>
                  <div className={`flex items-center justify-between`}>
                     <p>Discount(-{discount}%)</p>
                     <span className={`font-bold text-red-500`}>
                        -${discouted}
                     </span>
                  </div>
                  <div className={`flex items-center justify-between`}>
                     <p>Delivery</p>
                     <span className={`font-bold 00`}>${delivery}</span>
                  </div>
                  <div className={`divider my-2`}></div>
                  <div className={`flex items-center justify-between`}>
                     <div>Total</div>
                     <span className={`font-bold 00`}>
                        ${sum - discouted - delivery}
                     </span>
                  </div>
                  <button type="submit" className={`btn mt-2`}>
                     Confirm
                  </button>
               </CardContent>
            </Card>
         </div>
      </div>
   );
}

export default Cart;
