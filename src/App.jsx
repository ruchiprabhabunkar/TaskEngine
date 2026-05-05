
import './App.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import Progress from './Progress'
import { useEffect, useState } from 'react'

function App() {
 const [tasks, setTasks] = useState([]);

 useEffect(()=>{
  localStorage.setItem("tasks", JSON.stringify(tasks))
 });

 const addTask=(task)=>{
 setTasks([...tasks, task])
  }


 const getDateStatus = ( date , completed = false) => {
    const today = new Date().toISOString().split("T")[0];   
    if(completed) return "✅  Completed";
     if(date<today) return "⚠️ Overdue";
     if(date === today) return "⚡ Today";
     return "⏳ Upcoming";
  }

const updateTask=(updatedTask, index)=>{
   const newTask = [...tasks]
   newTask[index] = updatedTask
   setTasks(newTask)
}



const deleteTask=(index)=>{
   setTasks(tasks.filter((_, i)=> i!=index))
}

const deleteAllTask=()=>{
setTasks([])
}

  return (
    <div className='app-container'>
      <div className='app-header'>
    <h1>
      Task <span> Engine</span>
    </h1>

    <p>Plan Smart. Work Fast.</p>

     </div> 
     <img src="" alt="" />
 <TaskForm  addTask={addTask}  getDateStatus={getDateStatus}/>
     {tasks.length > 0 ? (<> <TaskList  tasks = {tasks} updateTask={updateTask} deleteTask={deleteTask}  getDateStatus={getDateStatus}/>
                         <Progress  tasks={tasks}/>
                         <div className='delDiv' onClick={deleteAllTask}>
                         <button type="button" className="btn-delete" >Clear All Tasks</button>
                         </div></> ) 
            :
            (<div className="empty-state">
                <div className="empty-state-icon">✨</div>
                <h3>Ready to conquer your day?</h3>
                <p>Add a task and get your work done!</p>
            </div>)}
      
     
      
    </div>
  )
}

export default App
