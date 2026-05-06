import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { type Product } from "@/types"
import { Link } from "react-router"

interface ProductCarouselProps {
    products: Product[]
}

export default function CarouselCard({ products }: ProductCarouselProps) {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000
                })
            ]}
        >
            <CarouselContent className="">
                {products.map((product) => (
                    <CarouselItem key={product.id}
                        className="lg:basis-1/3 pl-1">
                        <div className="flex lg:px-4 p-4 gap-4">
                            <img src={product.images[0]} alt={product.name} className="size-28 rounded-md" />
                            <div className="">
                                <h3 className="text-sm font-bold line-clamp-1">{product.name}</h3>
                                <p className="line-clamp-2 mt-2 text-sm text-gray-600">{product.description}</p>
                                <Link to={`/products/${product.id}`}
                                    className="text-sm font-semibold text-brand hover:underline">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
