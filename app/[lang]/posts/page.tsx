"use client";

import "@/i18n/client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const PostsPage = () => {
    const date = new Date().toISOString();

    const params = useParams();

    const lang = params.lang as string;

    const { t } = useTranslation();
    return (
        <div className="card text-center space-y-4">
            <h1 className="title">{t("posts")}</h1>

            <p>
                {t("currentTime")}: {date}
            </p>

            <Link
                href={`/${lang}/posts/create`}
                className="link-btn"
            >
                {t("createPost")}
            </Link>
        </div>
    );
}

export default PostsPage;
