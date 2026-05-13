import MainNavigation from "./MainNavigation";
import { siteConfig } from "@/config/site"
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "../mode-toggle";

export default function Header() {
    return (
        <header className="w-full border-b fixed top-0 z-40 bg-background">
            <nav className="container flex h-16 items-center mx-auto">
                <MainNavigation items={siteConfig.mainNav} />
                <MobileNavigation items={siteConfig.mainNav} />
                <div className="flex flex-1 items-center justify-end space-x-4 mr-8 lg:mr-0">
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}
