import styles from "../componentes/NewTask.module.css";
import { useState } from "react";
import { Circle, Trash, PlusCircle} from "phosphor-react";
import { consoleTeste, Header } from "./Header";
import { Task } from "./Task";
  
export const tasks = [    {
  id: 1,
  content: "Oi"
  
},
{
  id: 2,
  content: "Agathaaa"
  
}


]

export function NewTask({id, content} ) {
 
 
  return (
    
    <div>
      
     
      <div className={styles.Task}>
        <span>
          <Circle className={styles.circle} size={20} />
        </span>
        <span>
          
          {content}

        </span>
        <button  className={styles.Delete}>  </button>
      
      
      </div>
      
    </div>
  );
}
