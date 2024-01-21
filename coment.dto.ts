import { User } from "./user.dto"

export type Comment = {
    id: string | undefined,
    postId: string,
    user: User,
    text: string,
    createdAt: Date | undefined,
    updatedAt: Date | undefined
}
