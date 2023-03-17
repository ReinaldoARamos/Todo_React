import { PlusCircle} from "phosphor-react";
import styles from "../Header/Header.module.css";
import logo from "../../assets/Logo.svg";

export function consoleTeste() {
  
  console.log(event.target.value)
  
  
}
export function Header({content}) {
 
  
  return (
    
    <div>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} />
      </header>
     
    </div>
  );
}
