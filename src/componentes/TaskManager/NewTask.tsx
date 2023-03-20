import styles from "../TaskManager/NewTask.module.css";
import { useState } from "react";
import { Circle, Trash, PlusCircle } from "phosphor-react";
import { consoleTeste, Header } from "../Header/Header";
import { Task } from "../Task";
import React from "react";

interface tasks {
  key?: String;
  content: string;
}

export function NewTask({ content }: tasks) {
  return (
    <div className={styles.Taskdiv}>
      <div className={styles.Task}>
        <span>
          <Circle className={styles.circle} size={20} />
        </span>
        <span>{content}</span>
        <button className={styles.Delete}>
          {" "}
          <Trash size={20} />{" "}
        </button>
      </div>
    </div>
  );
}
