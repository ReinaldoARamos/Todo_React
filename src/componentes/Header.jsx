import { PlusCircle} from "phosphor-react";
import styles from "../componentes/Header.module.css";
import logo from "../assets/Logo.svg";

export function consoleTeste() {
  
  console.log(event.target.value)
  
  
}
export function Header({content}) {
 
  
  return (
    
    <div>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} />
      </header>
      <div className={styles.createTask}>
      <input onChange={consoleTeste} className={styles.input} placeholder={"Adicione uma tarefa aqui"} />
      <button  className={styles.button}>
        
        Criar
        <PlusCircle size={20}/>
        </button>

      </div>
     
    </div>
  );
}
