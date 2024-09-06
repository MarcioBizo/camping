import { useState } from "react";
import Modal from "react-modal";
import 'animate.css';
import arraytestemodal from '../modal/arraytestemodal.js'
import closeImg from "../modal/close.png";
import Note from "../../Login/Assets/Note.jsx";

Modal.setAppElement("#root")

function JanelaModal() {
    const [abrirModal, setAbrirModal] = useState(false);

    function abrir() {
        setAbrirModal(true);
    }

    function fechar() {
        setAbrirModal(false);
    }



    return (
        <div className="containerr">
            <div className="btnLogin" onClick={abrir}><p>Abrir Modal</p></div>
            <Modal
                isOpen={abrirModal}
                onRequestClose={fechar}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"

            >

                <img className="btnFechar" onClick={fechar} src={closeImg} />


                <h2 className="titleModal">Modal</h2>
                <hr />
                {
                    arraytestemodal.map(arraymodal => (
                    
                            <div className="modelarray">
                            <Note
                                key={arraymodal.id}
                                name={arraymodal.nome}
                                title={arraymodal.titleModal}
                                endURL={arraymodal.url}
                            />

                    
                            </div>
                    ))
                }
                </Modal>


        </div>
    );

}
export default JanelaModal;