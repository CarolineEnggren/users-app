import type { User } from "../types/user"
import { Link } from "react-router-dom"
import { UserRound, MapPin } from "lucide-react"

// A single user received from the parent UserList component.
type UserCardProps = {
    user: User
}

const UserCard = ({ user }:UserCardProps) => {

    return(
        <Link to={`/users/${user.id}`}>
            <article className="h-full rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                    <UserRound size={24} />
                </div>
                 <h2 className="text-xl font-bold text-stone-800">
                    {user.profile.name}
                </h2>
                 <p className="text-stone-500">
                    @{user.username}
                </p>
                <div className="mt-4 flex items-center gap-2 text-stone-600">
                    <MapPin size={18} className="text-emerald-700" />
                    <p>{user.profile.address.city}</p>
                </div>
            </article>

        </Link>
    )
}

export default UserCard