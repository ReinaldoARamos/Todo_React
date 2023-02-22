import styles from '../componentes/Header.module.css'
import logo from '../assets/Logo.svg'

 export function Header(header){

    return(
        <div>
            <header className={styles.header}> <img src={logo} /></header>
       
       </div>
           
            
      
    )
}

