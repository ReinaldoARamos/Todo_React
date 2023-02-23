import styles from "../componentes/Task.module.css"

export function Task() {
    const counter = 0
    return(
        <div>
          <div className={styles.AllTasks}>
            <span className={styles.Created}>
                Tarefas Criadas
                <span className={styles.counter}>{counter}</span>
                </span>
              
                <span className={styles.Concluded}>
                Tarefas concluidas
                <span className={styles.counter}> {counter}</span>
                </span>
              
            </div>
         <footer className={styles.Line}></footer>
            
          
        </div>
    )
}
