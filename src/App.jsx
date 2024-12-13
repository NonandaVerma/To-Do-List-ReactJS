import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MdDelete } from "react-icons/md";

function App() {

  const[inputVal,setInputVal]=useState("")

  const[allTask,setTask]=useState([])

  console.log(allTask)

  let getValue=(e)=>{
    setInputVal(e.target.value);
  }

  let addTask=()=>{
    setTask([...allTask,inputVal])
    setInputVal("");
  }

  return (
    <>
    <div className='main'>
      <h1>To-do List  (With Use state)</h1>
      <div className='row'>
         <input type="text" onChange={getValue} placeholder='Enter the task' value={inputVal}/>
         <button onClick={addTask}>Add Task</button>
      </div>

      <div className='listrow'>
        <ul>

      {  allTask.map((v,i)=>{
            return(
              <> <ListItems Data={v} index={i} allTask={allTask} setTask={setTask}/> </>
            )
          })
      }
          
           
        </ul>
      </div>
    </div>
   
     
    </>
  )
}

export default App


let ListItems=( {Data, index, allTask, setTask} )=>{
  

  let removeItem=()=>{

    let newData=allTask.filter((v,i)=>i!=index)
    setTask(newData);
  }

  const[done, setDone]=useState(false)
  let doneTask=()=>{
    setDone(!done)
  }
  return(
    <>
     <li onClick={doneTask} className={ done ? "activeLi" : " "}>{Data} <span onClick={removeItem}> <MdDelete /></span></li>
    </>
  )
  
}