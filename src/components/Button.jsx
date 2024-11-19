const COLOR = {
    primary: "bg-zinc-800",
    secondary: "bg-green-800"
}

export const Button = ({ color, onclick, children, type = "text" }) => {
    console.log(type);

    return (
        <button
            onClick={onclick}
            className={"border px-4 text-white py-3 rounded-md " + COLOR[color]}
            type={type}
        >
            {children}
        </button>
    )
}