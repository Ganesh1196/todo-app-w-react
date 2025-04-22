import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props
    
    //This is a filter to list out the data as per tab selected. If the All tab is selected it will show the data in All Tab
    const filterTodosList = selectedTab === "All" ?
        todos :
        selectedTab === "Open" ?
            todos.filter(val => !val.complete) :
            todos.filter(val => val.complete)
    return (
        <>
            {
                //Maps through each todos and displays the Todo card for each todo
                filterTodosList.map((todo, todoIndex) => {
                    //the {...props} is to get the handleDeleteTodo and handleCompleteTodo || the index is needed in todoCard Component
                    return (<TodoCard key={todoIndex} todo={todo} {...props} /**there is a bug in the open tab where we cannot "Done" the particular todo so we compare the value of that todo with the todos value and get the index of that*/todoIndex={todos.findIndex(val=> val.input == todo.input)}/>
                    )
                })
            }
        </>
    )
}   