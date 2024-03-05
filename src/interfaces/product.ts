import {type Image} from "./image";

export interface Product{
    image:Image,
    link:string,
    title:string,
    description?:string,
    price:number,
    
}