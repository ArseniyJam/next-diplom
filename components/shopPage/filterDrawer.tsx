import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/components/ui/drawer";
import FilterContent from "@/components/shopPage/filterContent";
import { SlidersHorizontal, X } from "lucide-react";
import React, { useState } from "react";

function FilterDrawer() {
   const [openDrawer, setOpenDrawer] = useState(false);
   return (
      <div>
         <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
            <DrawerTrigger>
               <SlidersHorizontal />
            </DrawerTrigger>

            <DrawerContent className={`h-[90vh] mt-0 `}>
               <DrawerHeader
                  className={`flex flex-row justify-between items-center border-b`}
               >
                  <h4 className={`satoshi `}>Filters</h4>
                  <DrawerClose className={``}>
                     <X />
                  </DrawerClose>
               </DrawerHeader>

               <DrawerTitle className={`hidden`}>Drawer</DrawerTitle>
               <div className={`overflow-y-auto h-full`}>
                  <FilterContent setOpenDrawer={setOpenDrawer} />
               </div>
            </DrawerContent>
         </Drawer>
      </div>
   );
}

export default FilterDrawer;
