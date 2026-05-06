import BlogCard from "@/components/blogs/BlogCard"
import CarouselCard from "@/components/products/CarouselCard"
import { Button } from "@/components/ui/button"
import Couch from "@/data/images/couch.png"
import { posts } from "@/data/posts"
import { products } from "@/data/products"
import { Link } from "react-router"

const SamplePosts = posts.slice(0, 3)

const Title = ({
    title,
    href,
    sideText
}: {
    title: string
    href: string
    sideText?: string
}) => (
    <div className="flex flex-col md:flex-row justify-between mt-28 mb-10 px-4 md:px-0">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">{title}</h2>
        <Link to={href} className="text-semibold text-muted-foreground underline">
            {sideText}
        </Link>
    </div>
)

function Home() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
                {/* text */}
                <div className="my-8 lg:mt-20 lg:mb-0 text-center lg:text-left lg:w-2/5">
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 lg:mb-8 text-brand">
                        Modern Interior Design Studio
                    </h1>
                    <p className="mb-6 lg:mb-8 text-brand">
                        Furniture is an essential component of any living space, providing comfort, functionality, and style.
                    </p>
                    <div className="">
                        <Button asChild className="bg-orange-300 mr-2 px-8 py-6 rounded-full text-base font-bold">
                            <Link to="/products">Shop Now</Link>
                        </Button>
                        <Button asChild variant="outline" className="px-8 py-6 rounded-full text-base font-bold text-brand">
                            <Link to="/products">Explore</Link>
                        </Button>
                    </div>
                </div>
                {/* image */}
                <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
            </div>
            <CarouselCard products={products} />
            <Title title="Recent Blogs" href="/blogs" sideText="View all blogs" />
            <BlogCard posts={SamplePosts} />
        </div>
    )
}

export default Home