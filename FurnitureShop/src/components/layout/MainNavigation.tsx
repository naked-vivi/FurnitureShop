import { Link } from "react-router-dom"
import { siteConfig } from "@/config/site"
import type { MainNavItems } from "@/types"
import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface MainNavigationProps {
    items?: MainNavItems;
}


export default function MainNavigation({ items }: MainNavigationProps) {
    return (
        <div className="hidden lg:flex  gap-6 md:gap-10 pl-6">
            <Link to="/" className=" items-center space-x-2 flex">
                <Icons.logo className="size-7" />
                <span className="font-bold inline-block">{siteConfig.name}</span>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    {items?.[0]?.card && (
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="from-muted/50 to-muted flex size-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                                to="/"
                                            >
                                                <Icons.logo className="size-6" aria-hidden="true" />
                                                <div className="mt-4 mb-2 text-lg font-medium">
                                                    {siteConfig.name}
                                                </div>
                                                <p className="text-muted-foreground text-sm leading-tight">
                                                    {siteConfig.description}
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    {items?.[0]?.card?.map((item) => (
                                        <ListItem href={item.href} title={item.title} key={item.title}>
                                            {item.description}
                                        </ListItem>
                                    ))},
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )}
                    {items?.[0]?.menu?.map((item) => (
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to={item.href}>
                                    {item.title}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link to={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>

    )
}
