import { useModal } from "./useModal";
import Modal from "./Modal";
import "./estilo.css";
const Modals=({poke})=>{
    const [isOpenModal1,openModal1,closeModal1]=useModal(false);
    
    return(
        <div>            
         <button className="button" onClick={openModal1}>Abrir</button>   
         <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
             <h3>{poke.name}</h3>
             <p>{poke?.abilities?.map(a => <div>{a.ability.name}</div>)}</p>
             <img src={poke?.sprites?.front_default} className="poke-image" alt='Pokemon front'/>
             <img src={poke?.sprites?.back_default} className="poke-image" alt='Pokemon front'/>
         </Modal>
        </div>
    );
}

export default Modals;