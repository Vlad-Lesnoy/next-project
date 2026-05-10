"use client";
import "@/i18n/client";
import {revalidatePostsPage} from "@/app/[lang]/posts/create/use-server";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

type PostForm = {
    title: string;
    body: string;
};

export default function CreatePostPage() {
    const router = useRouter();

    const params = useParams();

    const lang = params.lang as string;

    const { t } = useTranslation();
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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="card space-y-4"
        >
            <h1 className="title">{t("createPost")}</h1>

            <input
                className="input"
                placeholder={t("title")}
                {...register("title")}
            />

            <textarea
                className="input h-28 resize-none"
                placeholder={t("body")}
                {...register("body")}
            />

            <button className="btn">
                {t("create")}
            </button>
        </form>
    );
}