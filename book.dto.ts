import { Category } from "./category.dto"
import { Language } from "./language.dto"
import { Tag } from "./tags.dto"

export type Book = {
    title: string,
    language: Language,
    tags: Tag[],
    categories: Category[],
    artist: string | undefined,
    pictures: number,
    thumb: string,
    albumUrl: string,
    createdAt: Date | undefined,
    updatedAt: Date | undefined,
}