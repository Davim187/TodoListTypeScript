import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Style from "./taskForm.module.css";

import { ITask } from "../../interface/Task";
import Input from "../input/input";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id:number, title:string ,difficulty: number): void
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


      if(handleUpdate){
        handleUpdate(id,title,difficulty)
      }else{
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty };
    setTaskList!([...taskList, newTask]);
    console.log(taskList);

    setTitle("");
    setDifficulty(0);
  }}

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    if (e.target.name == "title") {
      setTitle(e.target.value);
    } else if (e.target.name == "difficulty") {
      setDifficulty(parseInt(e.target.value));
    } else {
      console.log("Dificuldade inda não foi definido.");
    }
  };
  return (
    <form onSubmit={addTaskHandler} className={Style.form}>
      <div className={Style.input_container}>
        <Input
          name="title"
          placeholder="Titulo da tarefa"
          typeInput="text"
          value={title}
          onChange={handleChange}
          nameLabel="Titulo:"
          for="title"
        />
      </div>
      <div className={Style.input_container}>
        <Input
          name="difficulty"
          placeholder="Titulo da dificuldade"
          typeInput="number"
          value={difficulty}
          onChange={handleChange}
          nameLabel="Dificuldade:"
          for="difficulty"
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
