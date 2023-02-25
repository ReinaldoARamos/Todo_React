import styles from "../componentes/Task.module.css"
import ClipboardLogo from "../assets/Clipboard.svg"
import { PlusCircle } from "phosphor-react"
import { NewTask } from "./NewTask"
import { tasks } from "./NewTask"


export function Task({content}) {
    const counter = 0
    return(
        

        
        <div>

 <div className={styles.createTask}>
      <input  className={styles.input} placeholder={"Adicione uma tarefa aqui"} />
      <button  className={styles.button}>
        
        Criar
        <PlusCircle />
        </button>

      </div>


          <div className={styles.AllTasks}>
            <span className={styles.Created}>
                Tarefas Criadas
                <span className={styles.counter}>{counter}</span>
                </span>
              
                <span className={styles.Concluded}>
                Tarefas concluidas
                <span className={styles.counter}> {counter}</span>
                </span>
              
            </div>
            <main>
           
         <footer className={styles.Line}></footer>
            
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
/*
<div className={styles.Clipboard}>
            <span>
                <img src={ClipboardLogo}/>
                Você ainda não tem tarefas criadas
            <p>Crie tarefas e organize</p>
            </span>
         

          </div>
*/