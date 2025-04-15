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
import { registerAction } from "@/data/auth";

function RegisterForm() {
   const [state, action] = useActionState(registerAction, { data: null });
   return (
      <div className={`mt-5 grid place-items-center min-h-[50vh]`}>
         <Card className={`w-[80vw] lg:w-[40vw]`}>
            <CardHeader>
               <CardTitle>Sign Up</CardTitle>
               <CardDescription>Fill in your data</CardDescription>
            </CardHeader>
            <CardContent className={`flex flex-col gap-3`}>
               <form className={`flex flex-col gap-4`} action={action}>
                  <div>
                     <Input
                        type={`text`}
                        placeholder={`username`}
                        name={`username`}
                     />
                     <ZodErrors error={state?.zodErrors?.username} />
                  </div>
                  <div>
                     <Input
                        type={`email`}
                        placeholder={`email`}
                        name={`email`}
                     />
                     <ZodErrors error={state?.zodErrors?.email} />
                  </div>
                  <div>
                     <Input
                        type={`password`}
                        placeholder={`password`}
                        name={`password`}
                     />
                     <ZodErrors error={state?.zodErrors?.password} />
                  </div>
                  <SubmitButton text={"Sign Up"} />
                  <StrapiErrors error={state?.strapiErrors} />
               </form>
               <Link
                  prefetch={false}
                  href={"/auth/login"}
                  className={`self-center underline`}
               >
                  I already have an account
               </Link>
            </CardContent>
         </Card>
      </div>
   );
}

export default RegisterForm;
