"use client";

import "@/i18n/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useTranslation, Trans } from "react-i18next";

type FormData = {
    user_name: string;
    email: string;
    age: number;
    password: string;
    confirm_password: string;
};

export default function RegisterPage() {
    const router = useRouter();

    const params = useParams();

    const lang = params.lang as string;

    const { t } = useTranslation();

    const schema = yup.object({
        user_name: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().required(),
        password: yup.string().min(6).required(),
        confirm_password: yup
            .string()
            .oneOf([yup.ref("password")])
            .required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = () => {
        router.push(`/${lang}/posts`);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="card space-y-3"
        >
        <h1 className="title">{t("register")}</h1>

    <Trans
        i18nKey="description"
        components={[<strong key="strong" />]}
    />
            <p>{t("welcome")}</p>
            <p></p>

    <input
        className="input"
        placeholder={t("username")}
        {...register("user_name")}
    />

    <p className="error">{errors.user_name?.message}</p>

    <input
        className="input"
        placeholder={t("email")}
        {...register("email")}
    />

    <p className="error">{errors.email?.message}</p>

    <input
        className="input"
        type="number"
        placeholder={t("age")}
        {...register("age")}
    />

    <p className="error">{errors.age?.message}</p>

    <input
        className="input"
        type="password"
        placeholder={t("password")}
        {...register("password")}
    />

    <p className="error">{errors.password?.message}</p>

    <input
        className="input"
        type="password"
        placeholder={t("confirmPassword")}
        {...register("confirm_password")}
    />

    <p className="error">
        {errors.confirm_password?.message}
    </p>

    <button className="btn">
        {t("submit")}
    </button>

    <div className="flex gap-2">
        <a href="/ru" className="btn text-center">
            RU
        </a>

        <a href="/en" className="btn text-center">
            EN
        </a>
    </div>
</form>
);
}