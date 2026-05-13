import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { Outlet } from "react-router-dom"

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden mt-16">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout