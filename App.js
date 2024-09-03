import logo from './logo.svg';

import './App.css';
import Mynavbar from "./Myappcomponents/Mynavbar";
import Heroes from "./Myappcomponents/Heroes";
import Test from "./Myappcomponents/Test";


import Calendar1  from './Myappcomponents/Calendar1';
import Todos from './Myappcomponents/Todos';
import { startTransition, useEffect } from 'react';
import { useState } from 'react';
import Add from './Myappcomponents/Add';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[]
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  
   const ondelete=(todo)=>{
    console.log("i am todo")
      settodos(todos.filter((e)=>{
        return e!==todo
  
      })
    
    )
  
   }
  
  const addtodo=(title,desc)=>{
    let sno;
      if(todos.length==0){
        sno=1;
      }
      else{ sno= todos[todos.length-1].sno + 1;}
      const mytodo= {
         sno:sno,
        title:title,
        desc:desc
      }
      console.log("your new todo is ", mytodo)
      settodos([...todos, mytodo])
     
  
      
  }
  
   const [todos, settodos] = useState(initTodo);
   useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])


  return (
    <>
        
        <Mynavbar/>
        <Heroes/>
        <Test/>
        
        <Calendar1/>
        <Todos todos={todos} ondelete={ondelete}/>
        <Add addtodo={addtodo}/>

     
    
    </>
  );
} 

export default App;
