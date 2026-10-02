import type { User } from "../types/user"
import UserCard from "./UserCard"

type UserListProps = {
	users: User[]
}

// Props sent from the parent Users component.
const UserList = ({ users }: UserListProps) => {
	return (
		<div>
			{users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
		</div>
	)
}

export default UserList
