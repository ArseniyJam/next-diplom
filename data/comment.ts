"use server";
import { revalidatePath } from "next/cache";

export async function postComment(prevState: any, formData: FormData) {
   console.log(Object.fromEntries(formData));

   revalidatePath("/shop/futureCategory/futureId");
   return { data: null };
}

export async function getComments(pageSize: number) {}
