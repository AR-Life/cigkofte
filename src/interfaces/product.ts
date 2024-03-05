import {type Image} from "./image";

export interface Product{
    image: Image | string ,
    title:string,
    description?:string,
    price:string,
    
}