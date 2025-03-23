"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const SubmitButton = ({
   text,
   classNames,
}: {
   text: string;
   classNames: string;
}) => {
   const status = useFormStatus();
   return (
      <Button
         type="submit"
         size={"lg"}
         className={classNames}
         disabled={status.pending}
      >
         {status.pending ? <Loader2 className="animate-spin" /> : text}
      </Button>
   );
};

export default SubmitButton;
