import {
   ProdCardInterface,
   CommentInterface,
   OneProductInterface,
} from "@/lib/interfaces";

export const products1: ProdCardInterface[] = [
   {
      url: "/NewArrivals/Frame1.png",
      title: "T-SHIRT WITH TAPE DETAILS",
      rating: 4.5,
      price: 120,
   },
   {
      url: "/NewArrivals/Frame2.png",
      title: "SKINNY FIT JEANS",
      rating: 3.5,
      price: 260,
      sale: 20,
   },
   {
      url: "/NewArrivals/Frame3.png",
      title: "SKINNY FIT JEANS",
      rating: 4.5,
      price: 180,
   },
   {
      url: "/NewArrivals/Frame4.png",
      title: "SLEEVE STRIPED T-SHIRT",
      rating: 4.5,
      price: 160,
      sale: 30,
   },
];

export const products2: ProdCardInterface[] = [
   {
      url: "/TopSelling/Frame1.png",
      title: "VERTICAL STRIPED SHIRT",
      rating: 5.0,
      price: 212,
      sale: 20,
   },
   {
      url: "/TopSelling/Frame2.png",
      title: "COURAGE GRAPHIC T-SHIRT",
      rating: 4.0,
      price: 145,
   },
   {
      url: "/TopSelling/Frame3.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      rating: 3.0,
      price: 80,
   },
   {
      url: "/TopSelling/Frame4.png",
      title: "FADED SKINNY JEANS",
      rating: 4.5,
      price: 210,
   },
];

export const oneProduct: OneProductInterface = {
   url: [
      "/Shop/Product/image1.png",
      "/Shop/Product/image2.png",
      "/Shop/Product/image3.png",
   ],
   sale: 40,
   size: ["sm", "lg"],
   color: ["green"],
   title: "One Life Graphic T-shirt",
   description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
   rating: 4.5,
   price: 300,
};

export const comments: CommentInterface[] = [
   {
      userName: "Samantha D.",
      rating: 4.5,
      content:
         '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
      date: "August 14,2023",
   },
   {
      userName: "Alex M.",
      rating: 4,
      content:
         '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
      date: "August 15,2023",
   },
   {
      userName: "Ethan R.",
      rating: 4.5,
      content:
         '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
      date: "August 17,2023",
   },
   {
      userName: "Olivia P.",
      rating: 4,
      content:
         '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
      date: "August 18,2023",
   },
   {
      userName: "Ava H.",
      rating: 5,
      content:
         '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
      date: "August 19,2023",
   },
   {
      userName: "Ethan R.",
      rating: 4.5,
      content:
         '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
      date: "August 20,2023",
   },
];
