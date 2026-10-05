import type { User } from "../types/user"
import UserCard from "./UserCard"

type UserListProps = {
	users: User[]
}

// Props sent from the parent Users component.
const UserList = ({ users }: UserListProps) => {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
		</div>
	)
}

export default UserList
