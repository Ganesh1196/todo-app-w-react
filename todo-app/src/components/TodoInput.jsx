import { useState } from "react"

export function TodoInput(props) {
    const { handleAddTodo,  inputValue, setInputValue } = props
    
    
    console.log(inputValue)
    return (
        //This is input container where user adds a task
        <div className="input-container">
            {/**This is where the input is updated realtime as per characters added */}
            <input onKeyDown={(e) => {
                if (e.key === "Enter") {
                    if (!inputValue) { return alert("Please Add the Task") }
                    handleAddTodo(inputValue)
                    setInputValue("")
                }
            }} value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Add Task" />
            <button onClick={() => {
                if (!inputValue) { return alert("Please Add the Task") }
                handleAddTodo(inputValue)
                setInputValue("")
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
    
}