import { useUsers } from "../hooks/useUsers"
import Stats from "../components/Stats"
import ErrorState from "../components/ErrorState"

const Home = () => {
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
	// Set keeps only unique cities.
	const cities = new Set(users.map(user => user.profile.address.city))

	const lightThemes = users.filter(
		user => user.settings.theme === "light",
	).length

	const darkThemes = users.filter(
		user => user.settings.theme === "dark",
	).length

	return (
		<main className="pt-16">
			<div className="mb-10 px-6">
				<p className="text-sm font-medium uppercase">Welcome to</p>

				<h1 className="text-4xl font-bold">Users App</h1>

				<p className="mt-3 max-w-xl">
					Explore users, view their details and get a quick overview
					of the community.
				</p>
			</div>

			<Stats
				users={users.length}
				cities={cities.size}
				lightThemes={lightThemes}
				darkThemes={darkThemes}
			/>
		</main>
	)
}

export default Home
