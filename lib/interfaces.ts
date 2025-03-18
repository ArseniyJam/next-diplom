export interface ProdCardInterface {
   url: string;
   title: string;
   rating: number;
   price: number;
   sale?: number | null;
}

export interface CommentInterface {
   rating: number;
   userName: string;
   content: string;
   date: string;
}
