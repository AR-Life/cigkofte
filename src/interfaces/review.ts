import {type Image} from "./image";

export interface Review{
    image:Image,
    fullName: string,
    comment:string,
    star:number
}