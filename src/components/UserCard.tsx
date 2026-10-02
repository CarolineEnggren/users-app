import type { User } from "../types/user"
import { Link } from "react-router-dom"

// A single user received from the parent UserList component.
type UserCardProps = {
    user: User
}

const UserCard = ({ user }:UserCardProps) => {

    return(
        <Link to={`/users/${user.id}`}>
            <article className="rounded-lg border p-6">
                <h2 className="text-xl font-bold">{user.profile.name}</h2>
                <p className="text-gray-600">{user.username}</p>
                <p>{user.profile.address.city}</p>
            </article>

        </Link>
    )
}

export default UserCard