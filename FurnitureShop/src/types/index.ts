export interface NavItem {
    title: string;
    href: string;
    description?: string;
}

export interface MainNavItem extends NavItem {
    card?: NavItem[];
    menu?: NavItem[];
}

export type MainNavItems = MainNavItem[];
