import React,{useState,useRef,useEffect}  from "react"; 
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

const local_storage_key = 'todos.todoapp'
function App() {
  const getlocalstorageData = () =>{
    const data=JSON.parse(localStorage.getItem(local_storage_key));
    if(data){
      return JSON.parse(localStorage.getItem(local_storage_key));
    }
    return [];
  }

  const [todos,setTodos] = useState(getlocalstorageData())
  const todoNameref = useRef()

  // useEffect(()=>{
  //   const storedtodos = JSON.parse(localStorage.getItem(local_storage_key))
  //  if(storedtodos){
  //   setTodos(storedtodos) 
  //   alert(storedtodos.length) }
  //  else 
  //  {alert('iam in your mood')}
  // }, [])

  useEffect(()=>{
localStorage.setItem(local_storage_key,JSON.stringify(todos))

  },[todos])


  function toggleTodos(id) {
    const newtodos = [...todos]
    const todo = newtodos.find(todo => todo.id === id)
    todo.complete =  !todo.complete
    setTodos(newtodos)
  }
function clearTodo() {
  setTodos([])
}
function Addtodo(e) {
  const name = todoNameref.current.value
  if(name === ''){
    alert('please enter anything')
    return
  }else{
  setTodos(prevTodos =>{
    return [...prevTodos,{id:uuidv4(),name:name,complete:false}]
  })
}
todoNameref.current.value = null

  return
}
function ClearOne() {
  const newtodo  = todos.filter(todo => !todo.complete)
  setTodos(newtodo)
}

  return (  
    < >
      <input type="text" ref={todoNameref} />
      <button type="button" onClick={Addtodo} >Add TodoList</button>
      <button onClick={ClearOne}>Clear The Selected One</button>
      <button onClick={clearTodo}>Clear All Todo</button> 
      <div>{todos.filter(todo=>!todo.complete).length} left to do </div>
      <TodoList todos = {todos}  toggleTodos = {toggleTodos}/>    
     
    </>
    
    )
}

export default App;
