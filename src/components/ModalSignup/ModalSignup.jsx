import ReactModal from "react-modal";
import { IoIosCloseCircle } from "react-icons/io";
import { StyledModalSignupOverlayd, StyledModalSignupContent } from './ModalSignupStyled'




const ModalSignup = ({ modalIsOpen, closeModal}) => {
    ReactModal.setAppElement('#root');

    return (
        <>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <StyledModalSignupOverlayd>
                    <StyledModalSignupContent>
                        <form>
                            <div className="box-btn-close">
                                <button className="btn-close" type="button" onClick={closeModal}>
                                    <IoIosCloseCircle />
                                </button>
                            </div>
                            <h2>Cadastre-se</h2>
                            <label>
                                <input type="text" name="name" className="input-email" placeholder="Nome" />
                            </label>
                            <label>
                                <input type="text" name="username" className="input-email" placeholder="Apelido" />
                            </label>
                            <label>
                                <input type="text" name="email" className="input-email" placeholder="E-mail" />
                            </label>
                            <label>
                                <input type="password" name="password" className="input-email" placeholder="Senha" />
                            </label>
                            <label>
                                <input type="password" name="confirPassword" className="input-email" placeholder="Confirme sua senha" />
                            </label>
                            <div className="box-btn-signin">
                                <button type="submit" className="btn-signin">Cadastrar</button>
                            </div>
                        </form>
                    </StyledModalSignupContent>
                </StyledModalSignupOverlayd>
            </ReactModal>

        </>
    )
}

export default ModalSignup;


