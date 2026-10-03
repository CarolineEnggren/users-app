import { Users, MapPin, Sun, Moon } from "lucide-react"

type StatsProps = {
	users: number
	cities: number
	lightThemes: number
	darkThemes: number
}

const Stats = ({ users, cities, lightThemes, darkThemes }: StatsProps) => {
	return (
		<section className="mx-auto max-w-5xl space-y-6 rounded-xl border border-stone-200 p-8">
			<h2 className="text-xl font-semibold">Overview</h2>

			<div className="grid grid-cols-2 gap-6">
				<div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
					<div className="flex items-center gap-6">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
							<Users size={28} />
						</div>

						<div>
							<p>Total users</p>
							<p className="text-3xl font-bold">{users}</p>
						</div>
					</div>
				</div>

				<div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
					<div className="flex items-center gap-6">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-700">
							<MapPin size={28} />
						</div>

						<div>
							<p>Total cities</p>
							<p className="text-3xl font-bold">{cities}</p>
						</div>
					</div>
				</div>

				<div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
					<div className="flex items-center gap-6">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700">
							<Sun size={28} />
						</div>

						<div>
							<p>Light Theme</p>
							<p className="text-3xl font-bold">{lightThemes}</p>
						</div>
					</div>
				</div>

				<div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
					<div className="flex items-center gap-6">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700">
							<Moon size={28} />
						</div>

						<div>
							<p>Dark Theme</p>
							<p className="text-3xl font-bold">{darkThemes}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Stats
