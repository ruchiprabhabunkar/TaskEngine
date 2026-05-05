import React, { useEffect, useState } from 'react'

export default function TaskForm({addTask, getDateStatus}) {

const getDate =()=>{
  return new Date().toISOString().split("T")[0]
  
}


  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium')
  const [category, setCategory] = useState('general')
  const [date, setDate] = useState(getDate())
  const [status , setStatus] = useState("");


useEffect(() => {
  setStatus(getDateStatus(date));
}, [date, getDateStatus]);
  
  
  const handleSubmit=(e)=>{
      e.preventDefault();    
      if(!task.trim()){
        alert("Please add some task..")
      }
addTask({text: task, priority, category, completed:false, date, status: status})
        setTask('')
        setPriority('medium')
        setCategory('general')
        setDate(getDate()) 
        setStatus("")      
  }




  return (
    <div className='card task-form-card'>
      <form action="" className='task-form' onSubmit={handleSubmit}>
        
          <input type="text"  required placeholder='What needs to be done?' onChange={(e)=> setTask(e.target.value)}  value={task} className='flex-fill'/>
          
           <select name="" id="" onChange={(e)=>setPriority(e.target.value)} value={priority}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>


          <select name="" id="" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>

          <input type="date" value={date}  onChange={(e)=> {setDate(e.target.value)  
                                                            setStatus(getDateStatus(e.target.value))}} className=''/>
          <button type='submit' className='btn-primary'>Add Task</button>   
          
        
        <div>
         
        </div>
      </form>
      
    </div>
  )
}
