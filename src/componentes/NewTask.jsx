import styles from "../componentes/NewTask.module.css";

import { Circle, Trash} from "phosphor-react";

  

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
        <button className={styles.Delete}>  </button>
      </div>
    </div>
  );
}
