export function Button({ type = "text", onClick, color, children }) {
    return (
        <button
            type={type}
            onClick={onclick}
            className={`border border-zinc-900 rounded-md p-2 text-sm ${color}`}
        >
            {children}
        </button >
    )
}