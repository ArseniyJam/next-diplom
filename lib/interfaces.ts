interface ImagesInterface {
   url: string;
}

export interface ProdCardInterface {
   images: ImagesInterface[];
   title: string;
   rating: number;
   price: number;
   style: string;
   documentId: string;
   sale: number | null;
}

export interface OneProductInterface {
   id: number;
   documentId: string;
   images: ImagesInterface[];
   comments: CommentInterface[];
   title: string;
   rating: number;
   price: number;
   type: string;
   style: string;
   color: string[];
   size: string[];
   details: string;
   description: string;
   sale: number | null;
}

export interface CommentInterface {
   id: number;
   rating: number;
   username: string;
   content: string;
   createdAt: string;
   updatedAt: string;
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

export interface StrapiErrorInterface {
   status: number;
   name: string;
   message: string;
}
export interface UserDataInterface {
   createdAt: string;
   email: string;
   id: number;
   updatedAt: string;
   username: string;
}
export interface UserInterface {
   data: UserDataInterface | null;
   error: StrapiErrorInterface | null;
   ok: boolean;
}
