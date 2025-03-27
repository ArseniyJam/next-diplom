"use client";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/submitButton";
import Link from "next/link";
import ZodErrors from "@/components/auth/zodErrors";
import StrapiErrors from "@/components/auth/strapiErrors";
import { useActionState } from "react";
import { loginAction } from "@/data/auth";

function LoginForm() {
   const [state, action] = useActionState(loginAction, { data: null });
   return (
      <div className={`mt-5 grid place-items-center min-h-[50vh]`}>
         <Card className={`w-[80vw] lg:w-[40vw]`}>
            <CardHeader>
               <CardTitle>Sign In</CardTitle>
               <CardDescription>Fill in your data</CardDescription>
            </CardHeader>
            <CardContent className={`flex flex-col gap-3`}>
               <form className={`flex flex-col gap-4`} action={action}>
                  <div>
                     <Input
                        name="identifier"
                        type="text"
                        placeholder="Username or E-mail"
                     />
                     <ZodErrors error={state?.zodErrors?.username} />
                  </div>
                  <div>
                     <Input
                        type={`password`}
                        placeholder={`password`}
                        name={`password`}
                     />
                     <ZodErrors error={state?.zodErrors?.password} />
                  </div>
                  <SubmitButton text={"Sign In"} />
                  <StrapiErrors error={state?.strapiErrors} />
               </form>
               <Link
                  href={"/auth/register"}
                  className={`self-center underline`}
               >
                  I dont have an account
               </Link>
            </CardContent>
         </Card>
      </div>
   );
}

export default LoginForm;
