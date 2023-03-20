import styles from "../componentes/Task.module.css";
import ClipboardLogo from "../assets/Clipboard.svg";
import { PlusCircle } from "phosphor-react";
import { NewTask} from "../componentes/TaskManager/NewTask";
import { useState } from "react";



 const tasks = [    {

  content: "Oi"
  
},



]

export function Task() {
  const counter = 0;

  const [Task, setNewTask] = useState([tasks]);
  const [TaskContent, setTaskContent] = useState('');

  function handleInputChange() {
    const TaskContent = event.target.value;
    setTaskContent(TaskContent)
    console.log(TaskContent);
  }

  function addNewTask() {
    event.preventDefault();
    const Task = TaskContent
    console.log(Task)
    setNewTask([...Task, TaskContent]);
    // setTaskContent("");
  }

  return (
    <div>
      <div className={styles.createTask}>
        <input
          onChange={handleInputChange}
          className={styles.input}
          placeholder={"Adicione uma tarefa aqui"}
          //value={TaskContent}
        />
        <button onClick={addNewTask} className={styles.button}>
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

        {tasks.map((Task) => {
          return <NewTask key={Task.content} content={Task.content} />;
        })}
      </main>
    </div>
  );
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
