import type { FallbackProps } from "react-error-boundary"

// Friendly fallback UI for unexpected rendering errors.
const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
	return (
		<div className="mx-auto max-w-xl px-6 py-16 text-center">
			<h1 className="text-2xl font-semibold text-stone-800">
				Something went wrong
			</h1>

			<p className="mt-2 text-stone-600">
				An unexpected error occurred. Please try again.
			</p>

			<button
				onClick={resetErrorBoundary}
				className="mt-5 rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white hover:bg-emerald-800"
			>
				Reload page
			</button>
		</div>
	)
}

export default ErrorFallback
