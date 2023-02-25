import styles from "../componentes/NewTask.module.css";
import { useState } from "react";
import { Circle, Trash} from "phosphor-react";
import { consoleTeste, Header } from "./Header";
import { Task } from "./Task";
  

export function NewTask({id, content} ) {
 
  const [newTask, setNewTask] = useState('');
 
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
       <button onClick={consoleTeste}>teste</button>
      
      </div>
      
    </div>
  );
}
