import styles from "../componentes/Task.module.css";
import ClipboardLogo from "../assets/Clipboard.svg";
import { PlusCircle } from "phosphor-react";
import { NewTask } from "./TaskManager/NewTask";
import { HtmlHTMLAttributes, useState } from "react";
import React from "react";


const LOCAL_STORAGE_KEY = "todo:savedTask"

export interface Itask {
  key?: string;
  content: string;
  iscomplete: boolean;
  //deleteTask: ( TaskId: string )=> void //passando a função como propriedade com o content em formato string

}


export function Task() {
  const [TaskContent, setTaskContent] = useState("");
  const [Task, setNewTask] = useState<Itask[]>([]);
  const counter = Task.length;
  const counteComplete = Task.filter((tasks) => tasks.iscomplete).length

  function setTasksSave(newTask : Itask[]) {
    setNewTask(newTask)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask) )
  }
 
  function handleInputChange() {
    const InputContent = event.target.value;
    setTaskContent(InputContent);
  }

  
  function addNewTask() {
    setTasksSave([
      ...Task,
      {
        key: crypto.randomUUID(),
       content: TaskContent,
        iscomplete: false,
 
      },
    ]
    
    );
    console.log(Task.length)
    if (Task.length >= 0) {
      const Clip : any = document.getElementById("dori");
      Clip.style.display = "none";
    } 
    setTaskContent('');
    
    
  }



  function deleteTask(TaskId: String) {
    const taskWithoutDeleteOne = Task.filter((Task)=> {
      
      return Task.key != TaskId
    
    }) 

    setTasksSave(taskWithoutDeleteOne); 

      if (Task.length <= 1) {
        const Clip = document.getElementById("dori");
        Clip.style.display = "flex";
      } 
  }

  function toogleTaskCompleteById(taskId : String) {
    const newTask = Task.map((task)=>{
      if(task.key === taskId ) {
        return {
          ...task, iscomplete:  !task.iscomplete
          
        }
      } else{
        return task
      }

    })
    setTasksSave(newTask)
 
  }
    
    

  

  return (
    <div>
      <div className={styles.createTask}>
        <input
          onChange={handleInputChange}
          className={styles.input}
          placeholder={"Adicione uma tarefa aqui"}
          value={TaskContent}
          required
        />

        <button
          onClick={addNewTask}
          className={styles.button}
          disabled={!TaskContent}
        >
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
          <span className={styles.done}>{counteComplete} de {counter}</span>
        </span>
      </div>
      <main>
        <div className={styles.Clipboard} id="dori">
          <span>
            <img src={ClipboardLogo} />
            Você ainda não tem tarefas criadas
            <p>Crie tarefas e organize</p>
          </span>
        </div>

        <footer className={styles.Line}></footer>

        {Task.map((task) => {
          return <NewTask  tasks={task}  onDelete={deleteTask}  onToogle={toogleTaskCompleteById}/>;
          })}
      </main>
    </div>
  );
}