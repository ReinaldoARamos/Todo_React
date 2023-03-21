import { Circle, Trash, PlusCircle, Check, CheckCircle } from "phosphor-react";
import React from "react";
import styles from "../TaskManager/NewTask.module.css";

export interface tasks {
  key?: Date;
  content: string;
  iscomplete: boolean;
  deleteTask: ( content: string )=> void //passando a função como propriedade com o content em formato string
  //função é sem retorno, por isso void
}


export function NewTask({ content , deleteTask}: tasks) { //passando o Task deleteTask na prop

  function HandleDelete() {
    deleteTask(content) //pegando a função handle Delete e passando o content como parametro
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
