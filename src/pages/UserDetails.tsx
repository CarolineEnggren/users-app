import { Link, useParams } from "react-router-dom"
import { useUsers } from "../hooks/useUsers"
import { ArrowLeft } from "lucide-react"

const UserDetails = () => {
	const { id } = useParams()
	const { data: users, isLoading, isError, refetch } = useUsers()

	if (isLoading) {
		return <p>Loading user...</p>
	}

	if (isError) {
		return (
			<div className="mx-auto max-w-xl px-6 py-16 text-center">
				<h1 className="text-2xl font-semibold text-stone-800">
					We couldn not load the users
				</h1>

				<p className="mt-2 text-stone-600">
					Something went wrong. Please try again.
				</p>

				<button
					onClick={() => refetch()}
					className="mt-5 rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white hover:bg-emerald-800"
				>
					Try again
				</button>
			</div>
		)
	}

	if (!users) {
		return <p>No users found.</p>
	}

	const user = users.find(user => user.id === Number(id))

	if (!user) {
		return <p>User not found.</p>
	}

	return (
		<main className="mx-auto max-w-4xl space-y-6 px-6 py-10">
			<Link
				to="/users"
				className="inline-flex items-center gap-2 font-medium text-emerald-800 hover:text-emerald-600"
			>
				<ArrowLeft size={18} /> Back to users
			</Link>

			<section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
				<h1 className="text-3xl font-bold text-stone-800">
					{user.profile.name}
				</h1>
				<p className="text-stone-500">@{user.username}</p>
				<p className="mt-3 text-stone-700">{user.profile.email}</p>
			</section>

			<div className="grid gap-6 md:grid-cols-2">
				<section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
					<h2 className="mb-3 text-xl font-semibold text-emerald-800">
						Address
					</h2>
					<p>{user.profile.address.street}</p>
					<p>{user.profile.address.city}</p>
					<p>{user.profile.address.zipCode}</p>
				</section>

				<section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
					<h2 className="mb-3 text-xl font-semibold text-emerald-800">
						Roles
					</h2>

					<ul className="list-disc pl-5">
						{user.roles.map(role => (
							<li key={role}>{role}</li>
						))}
					</ul>
				</section>
			</div>

			<section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
				<h2 className="mb-3 text-xl font-semibold text-emerald-800">
					Settings
				</h2>

				<p>Theme: {user.settings.theme}</p>

				<p>
					Email notifications:{" "}
					{user.settings.notifications.email ? "On" : "Off"}
				</p>

				<p>
					Push notifications:{" "}
					{user.settings.notifications.push ? "On" : "Off"}
				</p>
			</section>
		</main>
	)
}

export default UserDetails
