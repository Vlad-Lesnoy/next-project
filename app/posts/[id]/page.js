import { cache } from 'react'

// Мемоизация запроса
const getPost = cache(async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!res.ok) throw new Error('Ошибка загрузки')

    return res.json()
})

// Генерация метаданных
export async function generateMetadata({ params }) {
    const { id } = await params

    const post = await getPost(id)

    return {
        title: post.title,
        description: post.body,
    }
}

// Страница
export default async function PostPage({ params }) {
    const { id } = await params

    const post = await getPost(id)

    return (
        <div style={{ padding: '20px' }}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p><b>ID:</b> {post.id}</p>
            <p><b>User ID:</b> {post.userId}</p>
        </div>
    )
}