import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo! 1', complete: true },
  //   { input: 'Hello! Add your first todo! 2', complete: true },
  //   { input: 'Hello! Add your first todo! 3', complete: false },
  // ]
  //This is a useState Hook from react which is used instead of traditional JS variables above. The todos will be the values and setTodos will be the setter for the todo. In useState parenthesis we can add the initial value. 
  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo! 1', complete: true }
  ])
  const [selectedTab, setSelectedTab] = useState("Open")
  const [editIndex, setEditIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  function handleAddTodo(newTodo){
    //The below code duplicates the todo by spreading and adding the following userinput to the end of the list
    // const newTodoList = [...todos, { input: newTodo, complete: false}]
    // setTodos(newTodoList)
    // handleSaveData(newTodoList)
    if (editIndex !== null) {
      // Editing existing todo
      let newTodoList = [...todos]
      newTodoList[editIndex] = { input: newTodo, complete: false }
      setTodos(newTodoList)
      setEditIndex(null)
    } else {
      // Adding new todo
      const newTodoList = [...todos, { input: newTodo, complete: false }]
      setTodos(newTodoList)
    }
  
    setInputValue("")  // clear input
    handleSaveData(todos)
  }

  function handleCompleteTodo(index){
    //update/edit/modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo["complete"] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index){
    //We need to filter out the list of todos as per the index that is selected will be removed
    let newTodoList = todos.filter((val, valIndex)=> {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleEditTodo(index){
    //
    setInputValue(todos[index].input)
    setEditIndex(index)
    
  }


  function handleSaveData(currTodos){
    localStorage.setItem("todo-app", JSON.stringify({todos: currTodos}))
  }

  useEffect(()=>{
    //the if statement is just a safe way to handle error in case the localstorage is not found
    if(!localStorage || !localStorage.getItem("todo-app")){
      return
    }
    let db = JSON.parse(localStorage.getItem("todo-app"))
      setTodos(db.todos)
  }, [])
  return (
    <>
      {/* components are listed here and render as per the hierarchy below */}
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoInput handleAddTodo = {handleAddTodo} inputValue={inputValue}
  setInputValue={setInputValue}/>
      <TodoList handleEditTodo={handleEditTodo} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
    </>
  )
}
export default App