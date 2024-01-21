import { Category } from "./category.dto"

export type Album = {
    id:string | undefined,
    title:string,
    categories:Category[],
    createdAt:Date | undefined,
    updatedAt:Date | undefined
}