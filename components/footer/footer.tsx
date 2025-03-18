import React from "react";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import FooterBadge from "@/components/footer/footerBadge";

function Footer() {
   const paymentsUrls = [
      "/payments/Badge.png",
      "/payments/Badge2.png",
      "/payments/Badge3.png",
      "/payments/Badge4.png",
      "/payments/Badge5.png",
   ];
   return (
      <div
         className={`mt-[200px] lg:mt-[160px] -mx-4  xl:-mx-[100px] bg-gray pt-[200px] pb-[78px] px-4 xl:px-[100px] relative`}
      >
         <div
            className={`absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2`}
         >
            <FooterBadge />
         </div>
         <div
            className={`flex flex-col gap-6 lg:flex-row lg:gap-[7vw] 2xl:justify-between `}
         >
            <div
               className={`flex flex-col gap-5 lg:max-w-[248px] xl:max-w-[358px]`}
            >
               <span className={`logo`}>SHOP.CO</span>
               <span className={`text-secondaryGray text-sm`}>
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
               </span>
               <div className={`social-icons flex gap-3`}>
                  <a href="#">
                     <Twitter height={16} />
                  </a>
                  <a href="#" className={`!bg-black`}>
                     <Facebook height={16} color={"#fff"} />
                  </a>
                  <a href="#">
                     <Instagram height={16} />
                  </a>
                  <a href="#">
                     <Github height={16} />
                  </a>
               </div>
            </div>
            <div
               className={`grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-[7vw] text-nowrap`}
            >
               <div className={`footer-col`}>
                  <span>COMPANY</span>
                  <a href="#">About</a>
                  <a href="#">Features</a>
                  <a href="#">Works</a>
                  <a href="#">Career</a>
               </div>
               <div className={`footer-col`}>
                  <span>HELP</span>
                  <a href="#">Customer Support</a>
                  <a href="#">Delivery Details</a>
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Privacy Policy</a>
               </div>
               <div className={`footer-col`}>
                  <span>FAQ</span>
                  <a href="#">Account</a>
                  <a href="#">Manage Deliveries</a>
                  <a href="#">Orders</a>
                  <a href="#">Payment</a>
               </div>
               <div className={`footer-col`}>
                  <span>RESOURCES</span>
                  <a href="#">Free eBook</a>
                  <a href="#">Development Tutorial</a>
                  <a href="#">How to - Blog</a>
                  <a href="#">Youtube Playlist</a>
               </div>
            </div>
         </div>
         <div className={`divider mt-12 mb-5`}></div>
         <div className={`lg:flex lg:justify-between lg:items-center`}>
            <span
               className={`block text-secondaryGray text-center mb-4 text-sm`}
            >
               Shop.co © 2000-2023, All Rights Reserved
            </span>
            <div className={`flex justify-center`}>
               {paymentsUrls.map((url, i) => (
                  <img
                     key={i}
                     src={url}
                     className={`h-13 lg:h-14 object-contain`}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default Footer;
