import { getStrapiURL } from "@/lib/utils";
import qs from "qs";

export function getFilteredSearchURL(prevState: any, formData: FormData) {
   const filters = {
      type: formData.getAll("type"),
      price: formData.getAll("price"),
      color: formData.getAll("color"),
      size: formData.getAll("size"),
      style: formData.getAll("style"),
   };

   let searchStr = "";
   for (const filtersKey in filters) {
      const typedFiltersKey = filtersKey as keyof typeof filters;
      if (filters[typedFiltersKey].join(",")) {
         searchStr +=
            filtersKey + "=" + filters[typedFiltersKey].join(",") + "&";
      }
   }

   //фильтрацию делать через ссылку

   return { ...prevState, data: searchStr.slice(0, -1) };
}

const baseURL = getStrapiURL();

async function fetchData(url: string) {
   try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
   } catch (error) {
      console.error(error);

      throw error;
   }
}

export async function getProducts(
   {
      page = 1,
      color = "",
      price = "200",
      size = "",
      style = "Casual,Formal,Party,Gym",
      type = "T-shirts,Shorts,Shirts,Hoodie,Jeans",
   },
   category: string,
) {
   if (category === "all") {
      category = "";
   }

   console.log("red,green,blue".includes("green"));

   const PAGE_SIZE = 2;
   const query = qs.stringify({
      fields: [
         "rating",
         "price",
         "title",
         "sale",
         "color",
         "size",
         "style",
         "type",
      ],
      populate: {
         images: {
            fields: ["url"],
         },
      },
      filters: {
         type: { $in: type.split(",") },
         style: { $in: category || style.split(",") },
         $and: [
            { color: { $containsi: color } },
            { size: { $containsi: size } },
            { price: { $lte: price } },
         ],
      },
      pagination: {
         pageSize: PAGE_SIZE,
         page: page,
      },
   });
   const url = new URL("/api/products", baseURL);
   url.search = query;
   return await fetchData(url.href);
}
