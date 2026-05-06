"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

type FormData = {
    user_name: string;
    email: string;
    age: number;
    password: string;
    confirm_password: string;
};

const schema = yup.object({
    user_name: yup.string().required("Введите имя"),
    email: yup.string().email("Неверный email").required("Введите email"),
    age: yup.number().positive().integer().required("Введите возраст"),
    password: yup.string().min(6, "Минимум 6 символов").required(),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password")], "Пароли не совпадают")
        .required(),
});

export default function RegisterPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        router.push("/posts");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Username" {...register("user_name")} />
            <p>{errors.user_name?.message}</p>

            <input placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <input type="number" placeholder="Age" {...register("age")} />
            <p>{errors.age?.message}</p>

            <input type="password" placeholder="Password" {...register("password")} />
            <p>{errors.password?.message}</p>

            <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirm_password")}
            />
            <p>{errors.confirm_password?.message}</p>

            <button type="submit">Register</button>
        </form>
    );
}