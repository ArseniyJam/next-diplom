import ProductPage from "@/components/productPage/productPage";

import { getProductById, getSortedProducts } from "@/data/products";
import { notFound } from "next/navigation";

async function Page({
   params,
}: {
   params: Promise<{ category: string; productId: string }>;
}) {
   const { productId } = await params;

   const product = await getProductById(productId);
   if (!product.data) {
      notFound();
   }

   const recommendedProducts = await getSortedProducts(
      "createdAt",
      product?.data?.type,
      product?.data?.id,
   );

   return (
      <ProductPage
         prod={product.data}
         recommendedProducts={recommendedProducts.data}
      />
   );
}

export default Page;
