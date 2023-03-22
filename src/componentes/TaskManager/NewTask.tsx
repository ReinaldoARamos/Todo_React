import { Circle, Trash, CheckCircle} from "phosphor-react";
import React from "react";
import { Itask } from "../Task";

import styles from "../TaskManager/NewTask.module.css";

interface Props{
  tasks: Itask,
  onDelete: (id: String) => void
}
 
export function NewTask({tasks, onDelete}: Props) { //passando o Task deleteTask na prop
let iscomplete = false;
 

 return (
    <div className={styles.Taskdiv}>
      <div className={styles.Task}>

        
        <span >

         {iscomplete  ? <CheckCircle size={20} className={styles.CicleDone} /> : 
          <Circle className={styles.circle} size={20}/>}

        </span >


        <span>
          <p> {tasks.content}</p>
          </span>
        <button className={styles.Delete}>
        <Trash size={20} onClick={() => onDelete(tasks.key)}/>
         
        </button>
      </div>
    </div>
  );
}