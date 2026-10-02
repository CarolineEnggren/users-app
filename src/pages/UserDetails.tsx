import { useParams } from "react-router-dom"
import { useUsers } from "../hooks/useUsers"

const UserDetails = () => {

    const { id } = useParams()
    const { data: users, isLoading, isError } = useUsers()

    if (isLoading) {
        return <p>Loading user...</p>
    }

    if (isError) {
        return <p>Something went wrong. Please try again.</p>
    }

    if (!users) {
        return <p>No users found.</p>
    }

    const user = users.find(user => user.id === Number(id))

    if (!user) {
        return <p>User not found.</p>
    }

    return(
        <main> 
            <h1>{user.profile.name}</h1>
            <p>@{user.username}</p>
            <p>{user.profile.address.city}</p>
        </main>
    )
}

export default UserDetails