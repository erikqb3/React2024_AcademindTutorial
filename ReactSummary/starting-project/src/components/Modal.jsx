import classes from "../css/Modal.module.css";
import { useNavigate } from "react-router-dom";

// function Modal({children, onClose}){ //{children} == props --> props.children //children is where you put the self-created component that is within this component
//   return (
//     <>
//       <div className={classes.backdrop} onClick={onClose}/>
//       <dialog open={true} className={classes.modal}>
//         {children}
//       </dialog>
//     </>
//   )
// }
function Modal({children }){ //{children} == props --> props.children //children is where you put the self-created component that is within this component
  const navigate = useNavigate()
  function closeHandler(){
    navigate('..') //an alternate to creating Links
  }
  
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}/>
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  )
}

export default Modal