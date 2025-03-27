"use server";
import { LoginProps, RegisterProps } from "@/lib/interfaces";
import { getStrapiURL } from "@/lib/utils";

const baseURL = getStrapiURL();

export async function registerService(userData: RegisterProps) {
   const url = new URL("/api/auth/local/register", baseURL);
   try {
      const response = await fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(userData),
      });
      return response.json();
   } catch (e) {
      console.error(e);
      throw e;
   }
}

export async function loginService(userData: LoginProps) {
   const url = new URL("/api/auth/local", baseURL);
   try {
      const response = await fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(userData),
      });
      return response.json();
   } catch (e) {
      console.error(e);
      throw e;
   }
}
