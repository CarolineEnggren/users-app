import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = () => {
	// Shared components such as Navbar and Footer will be rendered here.
	// Outlet renders the page that matches the current route.

	return (
		<div className="flex flex-col min-h-screen bg-stone-50 text-stone-800">
			<Navbar />

			<main className="flex-1">
				<Outlet />
			</main>

			<Footer />
		</div>
	)
}

export default Layout
