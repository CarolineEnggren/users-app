import { Home, Users, User } from "lucide-react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	// PLAN:
	// 1. App name / logo
	// 2. Navigation links
	// 3. Responsive navigation later if needed

	return (
		<nav className="flex item-center justify-between px-6 py-4 border-b bg-white">
			<div className="flex item-center gap-2">
				<User />
				Users App
			</div>

			<div className="flex items-center gap-6">
				{/* NavLink handles navigation and active link styling */}
				<NavLink
					to="/"
					className={({ isActive }) =>
						`flex items-center gap-2 ${isActive ? "font-bold" : ""}`
					}
				>
					<Home />
					Home
				</NavLink>
				<NavLink
					to="/users"
					className={({ isActive }) =>
						`flex items-center gap-2 ${isActive ? "font-bold" : ""}`
					}
				>
					<Users />
					Users
				</NavLink>
			</div>
		</nav>
	)
}
export default Navbar
