import { Circle, Trash, PlusCircle } from "phosphor-react";
import React from "react";
import styles from "../TaskManager/NewTask.module.css";

interface tasks {
  key?: String;
  content: string;
  iscomplete: boolean;
  deleteTask: ( content: string )=> void
}


export function NewTask({ content , deleteTask}: tasks) {

  function HandleDelete() {
    deleteTask(content)
  }
  
  return (
    <div className={styles.Taskdiv}>
      <div className={styles.Task}>
        <span>
          <Circle className={styles.circle} size={20}/>
        </span>
        <span>{content}</span>
        <button className={styles.Delete}>
        <Trash size={20}  onClick={HandleDelete}/>
         
        </button>
      </div>
    </div>
  );
}
