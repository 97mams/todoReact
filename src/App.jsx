import { useState } from "react";
import { Button } from "./components/Button";

export default function App() {

    return (
        <Counter>
        </Counter>
    );
}


function Counter() {
    const [value, setvalue] = useState(0)
    const handleIncrement = () => {
        setvalue((current) => {
            return current + 1
        })
    }
    const handleUnincrement = () => {
        setvalue(0)
    }
    return (
        <div className="w-full h-screen -center bg-gray-900 text-white">
            <p className="text-3xl">
                value:{value}
            </p>
            <Button
                color="secondary"
                onclick={handleIncrement}
            >
                Click me
            </Button>
            <Button
                color="primary"
                onclick={handleUnincrement}
            >
                Reset
            </Button>
        </div>
    )
}