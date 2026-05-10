"use server"
import {revalidatePath} from "next/cache";

export const revalidatePostsPage = async  () => {
    revalidatePath("/posts")
}