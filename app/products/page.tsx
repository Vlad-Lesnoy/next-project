const products = [
    { id: "1", name: "Ноутбук" },
    { id: "2", name: "Смартфон" },
    { id: "3", name: "Планшет" },
];

export default function ProductsPage() {
    return (
        <main>
            <h1>Список товаров</h1>

            <p>Для просмотра товара измените URL в адресной строке:</p>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} — введите в адресной строке:
                        <br />
                        http://localhost:3000/products/{product.id}
                    </li>
                ))}
            </ul>
        </main>
    );
}