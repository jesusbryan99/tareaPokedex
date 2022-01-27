import "./estilo.css";
const Modal=({children,isOpen,closeModal})=>{
    const handleModalContainerClick=(e)=>e.stopPropagation();
    return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
     
     <div className="modal-container" onClick={handleModalContainerClick}>
       <button class="modal-close" onClick={closeModal}><p> X </p></button>
       {children}    
     </div>
    </article>
    );   
}
export default Modal;