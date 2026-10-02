import { useQuery } from "@tanstack/react-query"
import type { User } from "../types/user"

const fetchUsers = async (): Promise<User[]> => {
	const response = await fetch(
		"https://api-userapi.onrender.com/api/users/getUsers",
		{
			headers: {
				"x-api-key": import.meta.env.VITE_API_KEY,
			},
		},
	)

	if (!response.ok) {
		throw new Error("Failed to fetch users")
	}

	return response.json()
}

// Fetches users from the API and manages the request with React Query.
export const useUsers = () => {
	return useQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
		staleTime: 10 * 60 * 1000,
	})
}
