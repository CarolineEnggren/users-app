import {Users, MapPin, Sun, Moon } from "lucide-react"

type StatsProps = {
    users: number
    cities: number
    lightThemes: number
    darkThemes: number
}

const Stats = ({ users, cities, lightThemes, darkThemes, }: StatsProps) => {



    return(

            <section className="space-y-6 border rounded-lg p-6">
                <h2 className="text-3xl font-bold">Overview</h2>

                <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-lg border p-6 text-center">
                        <p>Total users</p>
                        <p className="text-3xl font-bold">{users}</p>
                    </div>

                    <div className="rounded-lg border p-6 text-center">
                        <p>Total cities</p>
                        <p className="text-3xl font-bold">{cities}</p>
                    </div>
                    <div className="rounded-lg border p-6 text-center">
                        <p>Light Theme</p>
                        <p className="text-3xl font-bold">{lightThemes}</p>
                    </div>
                    <div className="rounded-lg border p-6 text-center">
                        <p>Dark Theme</p>
                        <p className="text-3xl font-bold">{darkThemes}</p>
                    </div>
                </div>  
            </section>
    )
}

export default Stats