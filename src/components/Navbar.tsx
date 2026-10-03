import { Home, Users, User } from "lucide-react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	// PLAN:
	// 1. App name / logo
	// 2. Navigation links
	// 3. Responsive navigation later if needed

	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between border-b border-stone-200 bg-white px-6 py-4 shadow-sm">
			<div className="flex items-center gap-2 font-semibold text-stone-800">
				<User className="text-emerald-700" />
				Users App
			</div>

			<div className="flex items-center gap-3">
				{/* NavLink handles navigation and active link styling */}
				<NavLink
					to="/"
					className={({ isActive }) =>
						`flex items-center gap-2 rounded-lg px-4 py-2 transition ${
							isActive
								? "bg-stone-100 font-semibold text-emerald-800"
								: "text-stone-600 hover:bg-stone-100"
						}`
					}
				>
					<Home size={20} />
					Home
				</NavLink>
				<NavLink
					to="/users"
					className={({ isActive }) =>
						`flex items-center gap-2 rounded-lg px-4 py-2 transition ${
							isActive
								? "bg-stone-100 font-semibold text-emerald-800"
								: "text-stone-600 hover:bg-stone-100"
						}`
					}
				>
					<Users size={20}/>
					Users
				</NavLink>
			</div>
		</nav>
	)
}
export default Navbar
