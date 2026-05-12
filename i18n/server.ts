import ru from "./locales/ru/common.json";
import en from "./locales/en/common.json";

const resources = {
    ru,
    en,
};

type Lang = keyof typeof resources;

export async function getT(lang: string) {
    const current =
        resources[(lang as Lang) || "ru"];

    function t(
        key: string,
        options?: Record<string, any>
    ) {
        let value =
            current[key as keyof typeof current] || key;

        if (options) {
            Object.keys(options).forEach((k) => {
                value = value.replace(
                    `{{${k}}}`,
                    String(options[k])
                );
            });
        }

        return value;
    }

    return { t };
}