import { Link } from "react-router"
import type { Post } from "@/types"

interface BlogPostListProps {
    posts: Post[]
}

function BlogPostList({ posts }: BlogPostListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0 my-8">
            {posts.map((post) => (
                <Link to={`/blogs/${post.id}`} key={post.id} >
                    <img src={post.image} alt={post.title} className="w-full rounded-2xl mb-4" />
                    <h2 className="font-extrabold text-xl line-clamp-1">{post.title}</h2>
                    <h3 className="font-normal text-base my-2 line-clamp-3">{post.content}</h3>
                    <div className="text-sm">
                        <span className="">by
                            <span className="font-semibold"> {post.author} </span>on
                            <span className="font-semibold"> {post.updated_at}</span>
                        </span>
                    </div>
                </Link>
            )
            )}
        </div>
    )
}

export default BlogPostList