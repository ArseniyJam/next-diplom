import Hero from "@/components/hero/hero";
import ProductsPreview from "@/components/productsPreview";
import { comments, products1, products2 } from "@/data/data";
import Categories from "@/components/homePage/categories";
import CarouselComments from "@/components/homePage/carouselComments";

function Page() {
   return (
      <div className={``}>
         <Hero />
         <ProductsPreview header={`NEW ARRIVALS`} data={products1} />
         <div className={`divider`}></div>
         <ProductsPreview header={`TOP SELLING`} data={products2} />
         <Categories />
         <CarouselComments comments={comments} />
      </div>
   );
}

export default Page;
