export interface ProdCardInterface {
   url: string;
   title: string;
   rating: number;
   price: number;
   sale?: number | null;
}

export interface OneProductInterface {
   url: string[];
   title: string;
   rating: number;
   price: number;
   color: string[];
   size: string[];
   description: string;
   sale?: number | null;
}

export interface CommentInterface {
   rating: number;
   userName: string;
   content: string;
   date: string;
}
