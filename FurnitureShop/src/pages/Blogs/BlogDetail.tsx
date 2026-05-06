import { useParams } from "react-router";
import { posts } from "@/data/posts";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

function BlogDetail() {
    const { postId } = useParams();
    return (
        <div>BlogDetail: {postId}</div>
    )
}

export default BlogDetail