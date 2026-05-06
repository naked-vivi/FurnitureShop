import CarouselCard from "@/components/products/CarouselCard"
import { Button } from "@/components/ui/button"
import Couch from "@/data/images/couch.png"
import { products } from "@/data/products"
import { Link } from "react-router"

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
        </div>
    )
}

export default Home