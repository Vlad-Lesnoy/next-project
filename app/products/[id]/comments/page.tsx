interface CommentsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const commentsData: Record<string, string[]> = {
    "1": [
        "Отличный ноутбук!",
        "Очень высокая производительность.",
    ],
    "2": [
        "Хорошая камера.",
        "Быстро разряжается батарея.",
    ],
    "3": [
        "Удобен для чтения.",
        "Хорошее соотношение цена/качество.",
    ],
};

export default async function CommentsPage({ params }: CommentsPageProps) {
    const { id } = await params;

    const comments = commentsData[id];

    if (!comments) {
        return <h1>Комментарии не найдены</h1>;
    }

    return (
        <main>
            <h1>Комментарии к товару {id}</h1>

            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </main>
    );
}