import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router"
import { Icons } from "@/components/icons"

function Error() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex flex-1 items-center justify-center px-4 my-32">
                <Card size="sm" className="w-full max-w-md">
                    <CardHeader className="flex flex-col items-center gap-2 text-center">
                        <div className="border border-dashed border-muted-foreground/70 rounded-full size-24 grid place-items-center mt-2 mb-4">
                            <Icons.exclamation className="size-10 text-muted-foreground/70" />
                        </div>
                        <CardTitle>Oops!</CardTitle>
                        <CardDescription>
                            Something went wrong.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center">
                        <Button variant="outline" asChild>
                            <Link to="/">Go to Home</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </main>
            <Footer />
        </div>
    )
}

export default Error
