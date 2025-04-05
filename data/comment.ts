"use server";
import { revalidatePath } from "next/cache";
import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/data/data";
import { redirect } from "next/navigation";

const baseURL = getStrapiURL();

export async function postComment(prevState: any, formData: FormData) {
   const body = {
      data: {
         username: formData.get("username"),
         rating: formData.get("rating"),
         content: formData.get("content"),
         product: { id: formData.get("id") },
      },
   };

   const url = new URL("/api/comments", getStrapiURL());
   try {
      const response = await fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(body),
      });
      const data = await response.json();

      return { ...prevState, data };
   } catch (e) {
      console.error(e);
      throw e;
   }
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

export async function getComments(
   pageSize: number,
   productId: string,
   paramToSort: string,
) {
   const query = qs.stringify({
      sort: [`${paramToSort}:desc`],
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
