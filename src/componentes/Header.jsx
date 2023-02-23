import { PlusCircle} from "phosphor-react";
import styles from "../componentes/Header.module.css";
import logo from "../assets/Logo.svg";


export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} />
      </header>
      <div className={styles.createTask}>
      <input className={styles.input} placeholder={"Adicione uma tarefa aqui"} />
      <button  className={styles.button}>
        
        Criar
        
        </button>
      </div>
     
    </div>
  );
}
