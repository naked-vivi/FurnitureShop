import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import About from "./pages/About";
import Error from "./pages/Error";
import Blog from "./pages/Blogs/Blog";
import BlogDetail from "./pages/Blogs/BlogDetail";
import { BlogRootLayout } from "./pages/Blogs/BlogRootLayout";
import ProductRootLayout from "./pages/Products/ProductRootLayout";
import Product from "./pages/Products/Product";
import ProductDetail from "./pages/Products/ProductDetail";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            ErrorBoundary: Error,
            children: [
                {
                    index: true,
                    Component: Home
                },
                {
                    path: "about",
                    Component: About
                },
                {
                    path: "blogs",
                    element: <BlogRootLayout />,
                    children: [
                        {
                            index: true,
                            Component: Blog
                        },
                        {
                            path: ":postId",
                            Component: BlogDetail
                        }
                    ]
                },
                {
                    path: "products",
                    element: <ProductRootLayout />,
                    children: [
                        {
                            index: true,
                            Component: Product
                        },
                        {
                            path: ":productId",
                            Component: ProductDetail
                        }
                    ]
                }
            ],
        }
    ]
)