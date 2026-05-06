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

export interface Product {
    id: string;
    name: string;
    description: string;
    images: string[];
    categoryId: string;
    price: number;
    discount: number;
    rating: number;
    inventory: number;
    status: string;
};

export interface Post {
    id: string;
    author: string;
    title: string;
    content: string;
    image: string;
    body: string;
    updated_at: string;
    tags: string[];
}


