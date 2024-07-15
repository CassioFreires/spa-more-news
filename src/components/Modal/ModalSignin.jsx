import ReactModal from "react-modal";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { StyledModalOverlayd, StyledModalContent } from "./ModalSigninStyled";
import * as Yup from 'yup';


const ModalSignin = ({modalIsOpen, closeModal, openRegisterModal}) => {
    ReactModal.setAppElement('#root');

    // parei na validação dos campos
    const schemaSignin = Yup.object().shape({
        email: Yup.string()
        .email()
        .required('O E-mail é obrigatório'),

        senha: Yup.string()
        .min(4, 'A senha deve ter pelo menos 4 caracteres')
        .required('A senha é obrigatória')
    })

    return (
        <>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
            >


                <StyledModalOverlayd>
                    <StyledModalContent>
                        <form>
                            <div className="box-btn-close">
                                <button className="btn-close" type="button" onClick={closeModal}>
                                    <IoIosCloseCircle />
                                </button>
                            </div>
                            <h2>Login</h2>
                            <label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    className="input-email" 
                                    placeholder="digite seu e-mail" 
                                    
                                    />
                            </label>
                            <label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    className="input-password" 
                                    placeholder="digite sua senha" />
                            </label>
                            <div className="box-btn-signin">
                                <button type="submit" className="btn-signin">Entrar</button>
                                <span onClick={openRegisterModal} type="submit">Cadastre-se</span>
                            </div>
                        </form>
                    </StyledModalContent>
                </StyledModalOverlayd>
            </ReactModal>
        </>
    )
}

export default ModalSignin;


