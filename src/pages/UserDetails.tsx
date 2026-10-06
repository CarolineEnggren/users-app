import { Link, useParams } from "react-router-dom"
import { useUsers } from "../hooks/useUsers"
import { ArrowLeft } from "lucide-react"
import ErrorState from "../components/ErrorState"

const UserDetails = () => {
	const { id } = useParams()
	const { data: users, isLoading, isError, refetch } = useUsers()

	if (isLoading) {
		return <p>Loading user...</p>
	}

	// Show the reusable error state and allow the user to retry the request.
	if (isError) {
		return <ErrorState onRetry={() => refetch()} />
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
