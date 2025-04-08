import { getStrapiURL } from "@/lib/utils";
import qs from "qs";
import { fetchData } from "@/data/data";

export function getFilteredSearchURL(prevState: any, formData: FormData) {
   const filters = {
      type: formData.getAll("type"),
      price: formData.getAll("price"),
      color: formData.getAll("color"),
      size: formData.getAll("size"),
      style: formData.getAll("style"),
   };
   console.log(filters);

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

export async function getProducts(
   {
      page = 1,
      color = "",
      price = "200",
      size = "",
      style = "Casual,Formal,Party,Gym",
      type = "T-shirts,Shorts,Shirts,Hoodie,Jeans",
      search = "",
   },
   category: string,
) {
   // Категория определяет стиль
   if (category === "All") {
      category = "";
   }

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
         "updatedAt",
         "createdAt",
      ],
      populate: {
         images: {
            fields: ["url"],
         },
      },
      filters: {
         title: { $contains: search },
         type: { $in: type.split(",") },
         style: { $in: category || style.split(",") },
         price: { $lte: price },
         $and: [
            {
               color: { $contains: color.split(",") },
            },
            {
               size: { $contains: size.split(",") },
            },
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

export async function getSortedProducts(
   paramToSort: string,
   typeToFilter: string = "T-shirts,Shorts,Shirts,Hoodie,Jeans",
   id: number = 0,
) {
   const query = qs.stringify({
      fields: ["rating", "price", "title", "sale", "style", "type"],
      populate: {
         images: {
            fields: ["url"],
         },
      },
      sort: [`${paramToSort}:desc`],
      filters: {
         type: { $in: typeToFilter.split(",") },
         id: { $notIn: id },
      },
      pagination: {
         pageSize: 4,
      },
   });
   const url = new URL("/api/products", baseURL);
   url.search = query;
   return await fetchData(url.href);
}

export async function getProductById(id: string) {
   const query = qs.stringify({
      populate: {
         images: {
            fields: ["url"],
         },
         comments: true,
      },
   });
   const url = new URL(`/api/products/${id}`, baseURL);
   url.search = query;
   return await fetchData(url.href);
}
