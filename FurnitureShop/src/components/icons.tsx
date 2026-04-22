import { HomeIcon } from "lucide-react"
import { CiShop } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

export type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
    logo: CiShop,
    home: HomeIcon,
    menu: RxHamburgerMenu,
}