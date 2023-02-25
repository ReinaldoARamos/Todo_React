import { useState } from 'react'
import {Task} from './componentes/Task'
import { Header } from './componentes/Header'
import { NewTask } from './componentes/NewTask'


const tasks = [    {
    id: 1,
    content: "Oi"
    
  },
  {
    id: 2,
    content: "Agathaaa"
    
  }
  

]

  
  function App() {
    return(
        <div>
            <Header />
           <Task/>
           <main>
            {tasks.map(tasks =>{
                return(
                 <NewTask 
                 key={tasks.id}
                 content={tasks.content}
                 />
                )
            })}
           </main>
           
          
          

        </div>
        
    )
}

export default App
