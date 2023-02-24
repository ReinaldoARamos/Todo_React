import { useState } from 'react'
import {Task} from './componentes/Task'
import { Header } from './componentes/Header'
import { NewTask } from './componentes/NewTask'



function App() {
    return(
        <div>
            <Header />
           <Task/>
           <NewTask/>
           <NewTask />
           <NewTask />

        </div>
        
    )
}

export default App
