export function Header(props) {
    const { todos } = props
    const todosLength = todos.length
    const openTodosLength = todos.filter(val => !val.complete).length
    const isTaskPlural = todosLength != 1

    const taskOrTasks = isTaskPlural ? "tasks" : "task"


    return (
        <header>
            <h1 className="text-gradient">You have {openTodosLength} open {taskOrTasks}.</h1>

        </header>
    )
}