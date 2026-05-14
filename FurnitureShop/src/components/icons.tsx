import {
    HomeIcon,
    PaperPlaneIcon,
    ExclamationTriangleIcon,
    ArrowLeftIcon,
    LayersIcon,
    PlusIcon,
} from "@radix-ui/react-icons";
import { Loader2 } from "lucide-react";
import { CiShop } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

export type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
    logo: CiShop,
    home: HomeIcon,
    menu: RxHamburgerMenu,
    paperPlane: PaperPlaneIcon,
    spinner: Loader2,
    exclamation: ExclamationTriangleIcon,
    arrowLeft: ArrowLeftIcon,
    layer: LayersIcon,
    plus: PlusIcon,
}