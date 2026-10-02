import { useUsers } from "../hooks/useUsers"
import Stats from "../components/Stats"

const Home = () => {
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
	// Set keeps only unique cities.
	const cities = new Set(
        users.map(user => user.profile.address.city)
    )

	const lightThemes = users.filter(
		user => user.settings.theme === "light",
	).length

	const darkThemes = users.filter(
		user => user.settings.theme === "dark",
	).length

	return (
		<main className="pt-16">
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
