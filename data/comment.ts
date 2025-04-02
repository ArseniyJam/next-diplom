"use server";
import { revalidatePath } from "next/cache";
import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/data/data";

const baseURL = getStrapiURL();

export async function postComment(prevState: any, formData: FormData) {
   console.log(Object.fromEntries(formData));

   revalidatePath("/shop/futureCategory/futureId");
   return { data: null };
}

export async function getTopComments() {
   const query = qs.stringify({
      filters: {
         rating: { $gte: 4 },
      },
      pagination: {
         pageSize: 6,
      },
   });
   const url = new URL("/api/comments", baseURL);
   url.search = query;
   return await fetchData(url.href);
}

export async function getComments(pageSize: number, productId: string) {
   const query = qs.stringify({
      filters: {
         product: {
            documentId: { $eq: productId },
         },
      },
      pagination: {
         pageSize: pageSize,
      },
   });
   const url = new URL("/api/comments", baseURL);
   url.search = query;
   return await fetchData(url.href);
}
