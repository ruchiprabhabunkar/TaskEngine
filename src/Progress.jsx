import React from 'react'

export default function Progress({tasks}) {
   const completeTask =  tasks.filter((t)=> t.completed).length
  const totalTask =  tasks.length
  
  const progress = totalTask === 0 ? 0 : (completeTask/totalTask)*100


  return (

   
     <div class="card progress-card">
            <div className="progress-header">
                <span>Task Progress</span>
                <span> {`${completeTask} of ${totalTask} task completed`}</span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{width: `${progress}%`}} ></div>
            </div>
        </div>
   
  )
}
