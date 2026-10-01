import { Outlet } from "react-router-dom"

const Layout = () => {
    // Shared components such as Navbar and Footer will be rendered here.
    // Outlet renders the page that matches the current route.

	// PLAN:
	// 1. Navbar - ska finnas på alla sidor
	// 2. Main - här visas aktuell Page
	// 3. Footer - ska finnas på alla sidor
	return (
		<div>
            <main>
                <Outlet />
            </main>

		</div>
	)
}

export default Layout
