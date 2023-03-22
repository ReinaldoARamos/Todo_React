import { Circle, Trash, PlusCircle, Check, CheckCircle } from "phosphor-react";
import React from "react";
import { Itask } from "../Task";

import styles from "../TaskManager/NewTask.module.css";

interface Props{
  tasks: Itask,
 
}
 
export function NewTask({tasks}: Props) { //passando o Task deleteTask na prop

 
 return (
    <div className={styles.Taskdiv}>
      <div className={styles.Task}>
        <span>
          <Circle className={styles.circle} size={20}/>
         
        </span>
        <span>{tasks.content} </span>
        <button className={styles.Delete}>
        <Trash size={20} onClick={tasks.deleteTask}/>
         
        </button>
      </div>
    </div>
  );
}