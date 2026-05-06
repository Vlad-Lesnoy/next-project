import Link from "next/link";

const PostsPage = () => {
    const date = new Date().toISOString();

    return (
        <div>
            <span>{date || "Loading..."}</span>
            <br />
            <Link href="/posts/create">Create Post</Link>
        </div>
    );
}

export default PostsPage;
