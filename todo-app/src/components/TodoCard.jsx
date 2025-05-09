export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo } = props
    // const todo = todos[todoIndex]
    console.log(todo)
    return (
        //todo cards style for each todo in the TodoList
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons" >
                <button onClick={()=>{
                    handleCompleteTodo(todoIndex)
                }} disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={()=>{
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
                <button onClick={()=>{

                    handleEditTodo(todoIndex)
                }}>
                    <h6>Edit</h6>
                </button>
            </div>
        </div>
    )
}