interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

const products = [
    { id: "1", name: "Ноутбук", description: "Мощный игровой ноутбук" },
    { id: "2", name: "Смартфон", description: "Современный смартфон" },
    { id: "3", name: "Планшет", description: "Лёгкий и удобный планшет" },
];

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;

    const product = products.find((p) => p.id === id);

    if (!product) {
        return <h1>Товар не найден</h1>;
    }

    return (
        <main>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <p>
                Для просмотра комментариев введите:
                <br />
                /products/{id}/comments
            </p>
        </main>
    );
}