import { useUsers } from "../hooks/useUsers"
import UserList from "../components/UserList"

const Users = () => {
	const { data: users, isLoading, isError, refetch } = useUsers()

	if (isLoading) {
		return <p>Loading users...</p>
	}

	if (isError) {
		return (
			<div className="mx-auto max-w-xl px-6 py-16 text-center">
				<h1 className="text-2xl font-semibold text-stone-800">
					We could not load the users
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

	if (!users || users.length === 0) {
		return <p>No users found.</p>
	}

	return (
		<main className="mx-auto max-w-6xl px-6 py-10">
			<div className="mb-8">
				<p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
					Community
				</p>
				<h1 className="text-3xl font-bold text-stone-800">Users</h1>
				<p className="mt-2 text-stone-600">View user details.</p>
			</div>
			<UserList users={users} />
		</main>
	)
}

export default Users
