import type { User } from "../types/user"

// A single user received from the parent UserList component.
type UserCardProps = {
    user: User
}

const UserCard = ({ user }:UserCardProps) => {

    return(
        <article>
            <h2>{user.profile.name}</h2>
            <p>{user.username}</p>
            <p>{user.profile.address.city}</p>
        </article>
    )
}

export default UserCard