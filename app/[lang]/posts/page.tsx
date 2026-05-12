import "@/i18n/client";
import { getT } from "@/i18n/server";
import Link from "next/link";

export default async function PostsPage({params}: {params: { lang: string };}) {

    const date = new Date().toISOString();

    const { lang } = await params;

    const { t } = await getT(lang);
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

