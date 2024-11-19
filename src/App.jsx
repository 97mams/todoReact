import { useState } from "react";
import { Button } from "./components/Button"
export default function App() {

    return (
        <Todo></Todo>
    );
}


function Todo() {
    return (
        <div className="p-4 flex flex-col gap-4 w-[500px]">
            <form
                action={(formData) => {
                    console.log(formData);
                }}
                className="flex items-center gap-2"
            >
                <input type="text" name="todo" className="border rounded-md px-2 py-3 flex-1" />
                <Button color="primary" type="submit">Click</Button>
            </form>
            <ul>
            </ul>
        </div>
    )
}