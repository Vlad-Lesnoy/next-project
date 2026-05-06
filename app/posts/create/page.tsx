"use client";
import {revalidatePostsPage} from "@/app/posts/create/use-server";
import { useForm } from "react-hook-form";

type PostForm = {
    title: string;
    body: string;
};

export default function CreatePostPage() {

    const { register, handleSubmit } = useForm<PostForm>();

    const onSubmit = async (data: PostForm) => {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        revalidatePostsPage();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Title" {...register("title")} />
            <br />

            <textarea placeholder="Body" {...register("body")} />
            <br />

            <button type="submit">Create</button>
        </form>
    );
}