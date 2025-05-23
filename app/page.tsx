import Hero from "@/components/hero/hero";
import ProductsPreview from "@/components/productsPreview";
import Categories from "@/components/homePage/categories";
import CarouselComments from "@/components/homePage/carouselComments";
import { getSortedProducts } from "@/data/products";
import { getTopComments } from "@/data/comment";

export const revalidate = 240;

async function Page() {
   const [arrivals, rated, comments] = await Promise.all([
      getSortedProducts("createdAt"),
      getSortedProducts("rating"),
      getTopComments(),
   ]);

   return (
      <div className={``}>
         <Hero />
         <ProductsPreview header={`NEW ARRIVALS`} data={arrivals.data} />
         <div className={`divider`}></div>
         <ProductsPreview header={`TOP RATED`} data={rated.data} />
         <Categories />
         <CarouselComments comments={comments.data} />
      </div>
   );
}

export default Page;
