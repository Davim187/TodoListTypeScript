import React  from "react";

import Style from "./modal.module.css";


interface Props{
    children: React.ReactNode
}

const Modal = (props:Props) =>{
     
    const closeModal = (e:React.MouseEvent): void =>{
        const modal = document.querySelector("#modal");
        modal!.classList.add("hide")
    } 

    return (  
        <div id="modal" className="hide">

        <div className={Style.fade}></div>
        <div className={Style.modal}>
        <i className="bi bi-x" onClick={closeModal}></i>
            <h2>Editar tarefa</h2>
            {props.children}
        </div>
        </div>
    )
}

export default Modal