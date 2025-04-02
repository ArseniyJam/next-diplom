import ProductPage from "@/components/productPage/productPage";

import { getProductById } from "@/data/products";

async function Page({
   params,
}: {
   params: Promise<{ category: string; productId: string }>;
}) {
   const { productId } = await params;

   const product = await getProductById(productId);

   return <ProductPage prod={product.data} />;
}

export default Page;
