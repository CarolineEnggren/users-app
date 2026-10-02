import { Link, useParams } from "react-router-dom"
import { useUsers } from "../hooks/useUsers"
import { ArrowLeft } from "lucide-react"

const UserDetails = () => {
	const { id } = useParams()
	const { data: users, isLoading, isError } = useUsers()

	if (isLoading) {
		return <p>Loading user...</p>
	}

	if (isError) {
		return <p>Something went wrong. Please try again.</p>
	}

	if (!users) {
		return <p>No users found.</p>
	}

	const user = users.find(user => user.id === Number(id))

	if (!user) {
		return <p>User not found.</p>
	}

	return (
		<main className="mx-auto max-w-4xl space-y-6 px-4 py-8">

            <Link to="/users" className="inline-flex items-center gap-2">
                <ArrowLeft size={18} /> Back to users
            </Link>



			<section className="rounded-lg border p-6">
				<h1 className="text-3xl font-bold">{user.profile.name}</h1>
				<p className="text-gray-600">@{user.username}</p>
				<p>{user.profile.email}</p>
			</section>

			<div className="grid gap-6 md:grid-cols-2">
				<section className="rounded-lg border p-6">
					<h2 className="text-xl font-bold">Address</h2>
					<p>{user.profile.address.street}</p>
					<p>{user.profile.address.city}</p>
					<p>{user.profile.address.zipCode}</p>
				</section>

				<section className="rounded-lg border p-6">
					<h2 className="text-xl font-bold">Roles</h2>

					<ul className="list-disc pl-5">
						{user.roles.map(role => (
							<li key={role}>{role}</li>
						))}
					</ul>
				</section>
			</div>

			<section className="rounded-lg border p-6">
				<h2 className="text-xl font-bold">Settings</h2>

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
