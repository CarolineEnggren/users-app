import { useUsers } from "../hooks/useUsers"
import Stats from "../components/Stats"


const Home = () => {
	const { data: users, isLoading, isError, refetch } = useUsers()

	if (isLoading) {
		return <p>Loading users...</p>
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
