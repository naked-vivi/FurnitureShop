import { Outlet } from "react-router"

export function BlogRootLayout() {
    return (
        <div className="min-h-screen bg-background">
            <Outlet />
        </div>
    )
}
