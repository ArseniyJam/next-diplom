import Hero from "@/components/hero/hero";
import ProductsPreview from "@/components/productsPreview";
import { comments, products1, products2 } from "@/data/data";
import Categories from "@/components/homePage/categories";
import CarouselComments from "@/components/homePage/carouselComments";
import { getSortedProducts } from "@/data/loader";

async function Page() {
   const arrivals = await getSortedProducts("createdAt");
   const rated = await getSortedProducts("rating");
   console.log(rated);
   return (
      <div className={``}>
         <Hero />
         <ProductsPreview header={`NEW ARRIVALS`} data={arrivals.data} />
         <div className={`divider`}></div>
         <ProductsPreview header={`TOP RATED`} data={rated.data} />
         <Categories />
         <CarouselComments comments={comments} />
      </div>
   );
}

export default Page;
