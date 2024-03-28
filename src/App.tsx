import React, { useState } from "react";
import Header from "./componets/header/header";
import Footer from "./componets/footer/footer";
import Style from "./App.module.css";
import TaskForm from "./componets/form/taskForm";
import TaskList from "./componets/list/taskList";

import { ITask } from "./interface/Task";
import Modal from "./componets/modal/modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate,setTaskToUpdade] = useState<ITask | null >(null)

  const deletTask = (id: number) => {
    setTaskList(
      taskList.filter((e) => {
        return e.id !== id;
      })
    );
  };

  const hideOrShowModal = (display:boolean) =>{
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }


  const editTask = (task:ITask):void =>{
      hideOrShowModal(true)
      setTaskToUpdade(task)
  }

  const updateTask = (id:number, title:string ,difficulty: number) => {
    const updateTask:ITask = {id,title, difficulty}

    const updatedItens= taskList.map((task)=>{
      return task.id ===updateTask.id ? updateTask : task
    })

    setTaskList(updatedItens)
    hideOrShowModal(false)
  }

  return (
    <div className="App">
      <Modal children={<TaskForm btnText="Editar tarefa" taskList={taskList} 
            task={taskToUpdate} handleUpdate={updateTask} />}/>
      <Header />
      <main className={Style.main}>
        <div>
          <h2>O que voce vai fazer ?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDeleyt={deletTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
