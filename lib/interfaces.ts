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

export interface ProdCartInterface {
   image: string;
   title: string;
   count: string;
   color: string;
   size: string;
   price: string;
}

//Backend
export interface RegisterProps {
   username: string;
   email: string;
   password: string;
}
export interface LoginProps {
   identifier: string;
   password: string;
}
export interface StrapiErrorsProps {
   message: string | null;
   name: string;
   status?: string | null;
}
