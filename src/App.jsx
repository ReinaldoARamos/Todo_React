import { useState } from 'react'
import {Task} from './componentes/Task'
import { Header } from './componentes/Header'
import { NewTask } from './componentes/NewTask'


const tasks = 
    {
      content: "Oi"
      
    }
  
  
  
  
function App() {
    return(
        <div>
            <Header />
           <Task/>
           <NewTask content={tasks.content}/>
          
          

        </div>
        
    )
}

export default App
