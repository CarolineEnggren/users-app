import { useUsers } from "../hooks/useUsers"

const Users = () => {
	const { data: users, isLoading, isError } = useUsers()

	if (isLoading) {
		return <p>Loading users...</p>
	}

	if (isError) {
		return <p>Something went wrong. Please try again.</p>
	}

	if (!users || users.length === 0) {
		return <p>No users found.</p>
	}

	return (
		<main>
			<h1>Users</h1>
		</main>
	)
}

export default Users
