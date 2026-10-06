type ErrorStateProps = {
	onRetry: () => void
}

// Reusable error state for failed API requests.
const ErrorState = ({ onRetry }: ErrorStateProps) => {
	return (
		<div className="mx-auto max-w-xl px-6 py-16 text-center">
			<h1 className="text-2xl font-semibold text-stone-800">
				We couldn't load the users
			</h1>

			<p className="mt-2 text-stone-600">
				Something went wrong. Please try again.
			</p>

			<button
				onClick={onRetry}
				className="mt-5 rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white hover:bg-emerald-800"
			>
				Try again
			</button>
		</div>
	)
}

export default ErrorState
