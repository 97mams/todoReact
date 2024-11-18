const COLOR = {
    primary: "bg-black-900",
    secondary: "bg-green-800"
}

export const Button = ({ color, onclick, children }) => {
    return (
        <button
            onClick={onclick}
            className={"border px-2 mpy-3 rounded " + COLOR[color]}
        >
            {children}
        </button>
    )
}