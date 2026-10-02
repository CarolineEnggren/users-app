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
            <p>{user.profile.email}</p>

            <h2>Address</h2>
            <p>{user.profile.address.street}</p>
            <p>{user.profile.address.city}</p>
            <p>{user.profile.address.zipCode}</p>

            <h2>Settings</h2>
            <p>Theme: {user.settings.theme}</p>
            <p>Email notifications: {user.settings.notifications.email ? "On" : "Off"}</p>
            <p>Push notifications: {user.settings.notifications.push ? "On" : "Off"}</p>

            <h2>Roles</h2>
            <ul>
                {user.roles.map(role => (
                    <li key={role}>{role}</li>
                ))}
            </ul>
            
        </main>
    )
}

export default UserDetails