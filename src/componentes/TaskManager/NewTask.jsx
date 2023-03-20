import styles from "../TaskManager/NewTask.module.css";
import { useState } from "react";
import { Circle, Trash, PlusCircle} from "phosphor-react";
import { consoleTeste, Header } from "../Header/Header";
import { Task } from "../Task";
  



export function NewTask({content} ) {
 
 
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
