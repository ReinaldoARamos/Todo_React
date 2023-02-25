import styles from "../componentes/NewTask.module.css";

import { Circle, Trash} from "phosphor-react";
export function NewTask() {
  return (
    <div>
      <div className={styles.Task}>
        <span>
          <Circle className={styles.circle} size={20} />
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum
        
        </span>
        <button className={styles.Delete}><Trash size={20} /> </button>
      </div>
    </div>
  );
}
