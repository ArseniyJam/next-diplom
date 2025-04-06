import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import FilterContent from "@/components/shopPage/filterContent";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

function FilterDrawer() {
   const [openDrawer, setOpenDrawer] = useState(false);
   return (
      <div>
         <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
            <DrawerTrigger>
               <SlidersHorizontal />
            </DrawerTrigger>
            <DrawerContent className={`h-[90vh] mt-0`}>
               <DrawerClose className={`absolute right-4 top-11`}>
                  <X />
               </DrawerClose>
               <DrawerTitle className={`hidden`}>Drawer</DrawerTitle>
               <FilterContent setOpenDrawer={setOpenDrawer} />
            </DrawerContent>
         </Drawer>
      </div>
   );
}

export default FilterDrawer;
