import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import About from "./pages/About";
import Error from "./pages/Error";
import Blog from "./pages/Blogs/Blog";
import BlogDetail from "./pages/Blogs/BlogDetail";
import { BlogRootLayout } from "./pages/Blogs/BlogRootLayout";

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
                }
            ],
        }
    ]
)