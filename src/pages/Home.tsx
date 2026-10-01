import { useUsers } from "../hooks/useUsers"

const Home = () => {
	const { data, isLoading, isError } = useUsers()

	if (isLoading) {
		return <p>Loading users...</p>
	}

	if (isError) {
		return <p>Something went wrong. Please try again.</p>
	}

	if (!data || data.length === 0) {
		return <p>No users found.</p>
	}

	return (
		<main>
			<h1>Users App</h1>
			<p>Total users: {data.length}</p>
		</main>
	)
}

export default Home
