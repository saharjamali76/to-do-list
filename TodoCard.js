import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import imageTodo from './M6LTTBPZGFJGAABB4G4NCIGZ2Y.jpg';
// Define a variable for the state of doing Todos
let statusClassName = "black-status"

function TodoCard(props) {

    const [firstState, secondState] = useState("unknown")

    const [isModalOpen, setIsModalOpen] = useState(false);

    function infoHandler() {
        setIsModalOpen(true)
    }

    function closeModalHandler() {
        setIsModalOpen(false)
    }

    function doneHandler() {
      setIsModalOpen(false)
      statusClassName = "green-status"
      secondState("Done")
  }

  function undoneHandler() {
    setIsModalOpen(false)
    statusClassName = "red-status"
    secondState("Undone")
}
const title = [props.title];
sessionStorage.setItem("title", title);
  return (
    <div className="box">
    <div className="card">
    <div className="imgBx">
    <img src={imageTodo} alt="BigCo Inc. logo"/>
        </div>
        <div class="details">
      <h2> {props.title}<br /><span> </span></h2>
      <p className={statusClassName}> status : {firstState} </p>
      <div className="actions">
        <button className="btn" onClick={infoHandler}>More information</button>
      </div>
      {isModalOpen ? <Modal onUndone={undoneHandler} onDone={doneHandler}/> : null}
      {isModalOpen && <Backdrop onClose={closeModalHandler}/>}
    </div>
    </div>
    </div>
  );
}

export default TodoCard;