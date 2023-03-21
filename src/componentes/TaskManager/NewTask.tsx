import { Circle, Trash, PlusCircle, Check, CheckCircle } from "phosphor-react";
import React from "react";
import { tasks } from "../Task";
import styles from "../TaskManager/NewTask.module.css";



interface Props{
  task: tasks
}
export function NewTask({ content , deleteTask, iscomplete}: Props) { //passando o Task deleteTask na prop

  function HandleDelete() {
    deleteTask(content) //pegando a função handle Delete e passando o content como parametro
  }
 

  return (
    <div className={styles.Taskdiv}>
      <div className={styles.Task}>
        <span>
          <Circle className={styles.circle} size={20}/>
         
        </span>
        <span>{content} </span>
        <button className={styles.Delete}>
        <Trash size={20}  onClick={HandleDelete}/>
         
        </button>
      </div>
    </div>
  );
}
