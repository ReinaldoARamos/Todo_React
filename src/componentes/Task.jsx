import styles from "../componentes/Task.module.css";
import ClipboardLogo from "../assets/Clipboard.svg";
import { PlusCircle } from "phosphor-react";
import { NewTask} from "../componentes/TaskManager/NewTask";
import { useState } from "react";





export function Task() {
  const counter = 0;

  const [TaskContent, setTaskContent] = useState('');
  const [Task, setNewTask] = useState([]);

  
  function handleInputChange() {
    const InputContent = event.target.value;
    setTaskContent(InputContent)
    
  }

  function addNewTask() {
    event.preventDefault();
    
   console.log(Task)
    setNewTask([...Task, TaskContent]);
    setTaskContent('')

  
  }

  return (
    <div >
      <div className={styles.createTask}>
        <input
          
          onChange={handleInputChange}
          className={styles.input}
          placeholder={"Adicione uma tarefa aqui"}
        value= {TaskContent}
      required
        />
        <button  onClick={addNewTask} className={styles.button} disabled={!TaskContent} >
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
    
        {Task.map((item, index) => {
          return <NewTask key={index} content={item} />;
        })}
      </main>
    </div>
  );
}

