import { useUsers } from "../hooks/useUsers"
import UserList from "../components/UserList"
import ErrorState from "../components/ErrorState"

const Users = () => {
	const { data: users, isLoading, isError, refetch } = useUsers()

	if (isLoading) {
		return <p>Loading users...</p>
	}

	// Show the reusable error state and allow the user to retry the request.
	if (isError) {
		return <ErrorState onRetry={() => refetch()} />
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
