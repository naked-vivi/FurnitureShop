import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site"
import type { MainNavItems } from "@/types"
import { Icons } from "@/components/icons"
import { Button } from "../ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"


interface MobileNavigationProps {
    items?: MainNavItems;
}

export default function MobileNavigation({ items }: MobileNavigationProps) {
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <Icons.menu className="size-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pt-9">
                    <SheetClose asChild>
                        <Link to="/" className="flex items-center space-x-2">
                            <Icons.logo className="size-4 mr-2" />
                            <span className="font-bold">{siteConfig.name}</span>
                        </Link>
                    </SheetClose>
                    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8">
                        <Accordion
                            type="multiple"
                            className="max-w-lg"
                        >
                            <AccordionItem value="shipping">
                                <AccordionTrigger>{items?.[0].title}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col space-y-2">
                                        {items?.[0]?.card?.map((item) => (
                                            <SheetClose key={item.href} asChild>
                                                <Link to={item.href}>
                                                    {item.title}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className="flex flex-col mt-4 space-y-2">
                            {items?.[0]?.menu?.map((item) => (
                                <SheetClose key={item.href} asChild>
                                    <Link to={item.href}>
                                        {item.title}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    )
}
