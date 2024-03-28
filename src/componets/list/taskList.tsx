import React  from "react";
import { ITask } from "../../interface/Task";
import Style from "./taskList.module.css";


interface Props{
    taskList: ITask[]
    handleDeleyt(id:number):void
    handleEdit(task:ITask):void

}

const TaskList = (props:Props) =>{
    return (  
        <>
            {props.taskList.length > 0 ? (
             props.taskList.map((task) =>(
                <div key={task.id} className={Style.task}>
                <div className={Style.details}>
                    <h4>{task.title}</h4>
                    <p>Dificuldade: {task.difficulty}</p>
                  </div>
                  <div className={Style.actions} >
                     <i className="bi bi-pencil" onClick={()=>{props.handleEdit(task)}}></i>
                    <i className="bi bi-trash" onClick={()=>{props.handleDeleyt(task.id)}}></i> 
                  </div>
                </div>
             ))
            ): (
                <p>Sem atividade!</p>
            )} 
        </>
    )
}

export default TaskList