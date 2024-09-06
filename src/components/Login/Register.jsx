import React from "react";

function Register() {
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


                <h2 className="titleModal">Modal de Login</h2>
                
                <div className="containerz">
                    <h1>Register</h1>
                    <form className="formz">
                        <Input
                            type="text"
                            placeholder="Informe um nome"
                        />

                        <Input
                            type="password"
                            placeholder="Informe um senha com 8 digitos"
                        />

                        <Input
                            type="password"
                            placeholder="Confirme a senha"
                        />
                        <button type="submit">Registrar</button>
                    </form>
                </div>

            </Modal>


        </div>
    )
}
export default Register;