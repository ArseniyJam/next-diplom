import Hero from "@/components/hero/hero";
import ProductsPreview from "@/components/productsPreview";
import Categories from "@/components/homePage/categories";
import CarouselComments from "@/components/homePage/carouselComments";
import { getSortedProducts } from "@/data/products";
import { getTopComments } from "@/data/comment";

async function Page() {
   const arrivals = await getSortedProducts("createdAt");
   const rated = await getSortedProducts("rating");
   const carouselComments = await getTopComments();

   return (
      <div className={``}>
         <Hero />
         <ProductsPreview header={`NEW ARRIVALS`} data={arrivals.data} />
         <div className={`divider`}></div>
         <ProductsPreview header={`TOP RATED`} data={rated.data} />
         <Categories />
         <CarouselComments comments={carouselComments.data} />
      </div>
   );
}

export default Page;
