import ProductPage from "@/components/productPage/productPage";

import { getProductById, getSortedProducts } from "@/data/products";

async function Page({
   params,
}: {
   params: Promise<{ category: string; productId: string }>;
}) {
   const { productId } = await params;

   const product = await getProductById(productId);
   const recommendedProducts = await getSortedProducts(
      "createdAt",
      product.data.type,
   );

   return (
      <ProductPage
         prod={product.data}
         recommendedProducts={recommendedProducts.data}
      />
   );
}

export default Page;
