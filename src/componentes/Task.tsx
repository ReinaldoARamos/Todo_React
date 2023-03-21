import styles from "../componentes/Task.module.css";
import ClipboardLogo from "../assets/Clipboard.svg";
import { PlusCircle } from "phosphor-react";
import { NewTask} from "./TaskManager/NewTask";
import { useState } from "react";
import React from "react";



export interface Itask {
  key?: string;
  content: string;
  iscomplete: boolean;
 // deleteTask: ( content: string )=> void //passando a função como propriedade com o content em formato string
  //função é sem retorno, por isso void
}

export function Task() {


  const [TaskContent, setTaskContent] = useState("");
  const [Task, setNewTask] = useState<Itask[]>([{
    key: "1", 
    content: "Teste",
    iscomplete: true
    
  }]);
  const counter = Task.length;
  const counteComplete = Task.filter((task) => {task.iscomplete})

  function handleInputChange() {
    const InputContent = event.target.value;
    
    setTaskContent(InputContent);
  }


  function addNewTask() {

    setNewTask([...Task, 
      {
      content: TaskContent,
      iscomplete: true
    }
  ]);
    
    setTaskContent("");

  }
  function deleteTask(taskToDelete : String) { //deleteTask recebe TasktoDelete(concent)
    const taskWithoutDeleteOne = Task.filter(content=>{  //faz um filter na lista(ja que é um array )
      return content != taskToDelete  //retorna o concent ja definido sem o TasktoDelete(content que sera apgado)
    })

    setNewTask(taskWithoutDeleteOne) //seta o estado
    if(Task.length <= 1){
      const Clip = document.getElementById('dori')
      Clip.style.display = "flex"
      
    }
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
          <span className={styles.done}>0 de {counter}</span>
        </span>
      </div>
      <main>
        
      <div   className={styles.Clipboard} id='dori'>
        <span>
          <img src={ClipboardLogo} />
          Você ainda não tem tarefas criadas
          <p>Crie tarefas e organize</p>
        </span>
      </div>
    
        <footer  className={styles.Line}></footer>

        {Task.map((task) => {
          return <NewTask key={task} tasks={task} />; 
          //aqui no deleteTask no return passei o deleteTaswk como o deleteTask que irei definidir nesse componente
        })}
      </main>
    </div>
  );
}
