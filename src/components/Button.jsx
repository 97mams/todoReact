export function Button({ type = "text", onclick, color, children }) {
    return (
        <button
            type={type}
            onClick={onclick}
            className={`border border-white bg-zinc-800 text-white rounded-md p-2 text-sm ${color}`}
        >
            {children}
        </button >
    )
}