"use server";
import { cookies } from "next/headers";
import { ProdCartInterface } from "@/lib/interfaces";

export async function cartForm(prevState: any, formData: FormData) {
   //Добавление товара в корзину
   const cookieStore = await cookies();
   let cart = await getCart();

   const prod: ProdCartInterface = {
      size: formData.get("size") as string,
      color: formData.get("color") as string,
      title: formData.get("title") as string,
      count: formData.get("count") as string,
      image: formData.get("image") as string,
      price: formData.get("price") as string,
      style: formData.get("style") as string,
      documentId: formData.get("documentId") as string,
   };

   if (cart?.length > 0) {
      // Проверка на уже добавленный товар в корзину
      const duplicateIndex = cart.findIndex(
         (obj) =>
            obj.title == prod.title &&
            obj.size == prod.size &&
            obj.color == prod.color,
      );
      if (duplicateIndex !== -1) {
         cart[duplicateIndex].count =
            +cart[duplicateIndex].count + +prod.count + "";

         cookieStore.set("cart", JSON.stringify(cart));
         return { ...prevState, data: prod };
      }
      cookieStore.set("cart", JSON.stringify([...cart, prod]));
   } else {
      cookieStore.set("cart", JSON.stringify([prod]));
   }

   return { ...prevState, data: prod };
}

export async function getCart() {
   const cookieStore = await cookies();

   const cookieCart: ProdCartInterface[] | [] = JSON.parse(
      cookieStore.get("cart")?.value ?? "[]",
   );

   return cookieCart;
}

export async function deleteCart() {
   const cookieStore = await cookies();
   cookieStore.set("cart", "[]");
}

export async function deleteCartItem(item: ProdCartInterface) {
   const cookieStore = await cookies();
   const cart = await getCart();
   if (cart) {
      cart.splice(
         cart.findIndex(
            (obj) =>
               obj.title == item.title &&
               obj.size == item.size &&
               obj.color == item.color &&
               obj.count == item.count,
         ),
         1,
      );
      cookieStore.set("cart", JSON.stringify(cart));
   }
}

export async function changeCartItemCount(
   item: ProdCartInterface,
   count: number,
) {
   const cookieStore = await cookies();
   const cart = await getCart();
   if (cart) {
      cart[
         cart.findIndex(
            (obj) =>
               obj.title == item.title &&
               obj.size == item.size &&
               obj.color == item.color &&
               obj.count == item.count,
         )
      ].count = count.toString();
      cookieStore.set("cart", JSON.stringify(cart));
   }
}

export async function getCartLength() {
   const cart = await getCart();
   return cart.length;
}
