import { User } from "./user.dto"

export type Reply = {
    id: string,
    commentId: string,
    commenter: User,
    user: User,
    text: string,
    createdAt: Date | undefined,
    updatedAt: Date | undefined
}