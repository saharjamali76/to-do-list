function Modal(props) {

  function btnDoneHandler() {
      props.onDone();
  }

  function btnUndoneHandler() {
      props.onUndone();
  }

const title = sessionStorage.getItem("title");
let titleInfo;
switch(title){
  case 'language': titleInfo = "Learn a new word";
  break;
  case 'Read a Book': titleInfo = "Reading the New World book";
  break;
  case 'Mobocollege': titleInfo = "Practicing a new lesson";
  break;
  case 'Bank': titleInfo = "Passing a paycheck";
  break;
  case 'Sport': titleInfo = "Swimming";
  break;
  case 'Meditation': titleInfo = "Quiet the mind, let your soul speak";
  break;
  default: titleInfo = "undefined Todo";
}

  return(
      <div className="modal">
          <h2>{title}</h2>
          <p>{titleInfo}</p>
          <button className="btn btn--alt" onClick={btnDoneHandler}>Done</button>
          <button className="btn" onClick={btnUndoneHandler}>Undone</button>
      </div>
  )
}

export default Modal;
