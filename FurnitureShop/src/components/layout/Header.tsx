import MainNavigation from "./MainNavigation";
import { siteConfig } from "@/config/site"
import MobileNavigation from "./MobileNavigation";

export default function Header() {
    return (
        <header className="w-full border-b">
            <nav className="container flex h-16 items-center">
                <MainNavigation items={siteConfig.mainNav} />
                <MobileNavigation items={siteConfig.mainNav} />
            </nav>
        </header>
    )
}
