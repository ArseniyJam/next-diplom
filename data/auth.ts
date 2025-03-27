"use server";

import { z } from "zod";
import { loginService, registerService } from "@/services/auth-services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const messageUsername =
   "The username must be between 3 and 20 characters long.";
const messageIdentifier = "The username must be at least 3 characters long.";
const messagePassword =
   "The password must be between 3 and 100 characters long.";

const schemaRegister = z.object({
   username: z
      .string()
      .min(3, {
         message: messageUsername,
      })
      .max(20, {
         message: messageUsername,
      }),
   password: z
      .string()
      .min(6, {
         message: messagePassword,
      })
      .max(100, {
         message: messagePassword,
      }),
   email: z.string().email({
      message: "Write a correct E-Mail",
   }),
});

export async function registerAction(prevState: any, formData: FormData) {
   const authData = schemaRegister.safeParse({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
   });
   if (!authData.success) {
      return {
         ...prevState,
         zodErrors: authData.error.flatten().fieldErrors,
         strapiErrors: null,
      };
   }
   const response = await registerService(authData.data);
   if (!response) {
      return { ...prevState, zodErrors: null, strapiErrors: null };
   }
   if (response.error) {
      return {
         ...prevState,
         zodErrors: null,
         strapiErrors: response.error,
      };
   }
   const cookieStore = await cookies();
   cookieStore.set("jwt", response.jwt);

   redirect("/shop/all");
}

const schemaLogin = z.object({
   identifier: z.string().min(3, {
      message: messageIdentifier,
   }),
   password: z
      .string()
      .min(6, {
         message: messagePassword,
      })
      .max(100, {
         message: messagePassword,
      }),
});

export async function loginAction(prevState: any, formData: FormData) {
   const authData = schemaLogin.safeParse({
      identifier: formData.get("identifier"),
      password: formData.get("password"),
   });
   if (!authData.success) {
      return {
         ...prevState,
         zodErrors: authData.error.flatten().fieldErrors,
         strapiErrors: null,
      };
   }
   const response = await loginService(authData.data);
   if (!response) {
      return { ...prevState, zodErrors: null, strapiErrors: null };
   }
   if (response.error) {
      return {
         ...prevState,
         zodErrors: null,
         strapiErrors: response.error,
      };
   }
   const cookieStore = await cookies();
   cookieStore.set("jwt", response.jwt);

   redirect("/shop/all");
}

export async function logoutAction() {
   const cookieStore = await cookies();
   cookieStore.set("jwt", "");
   redirect("/");
}
