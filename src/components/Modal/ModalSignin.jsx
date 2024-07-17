import ReactModal from "react-modal";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { StyledModalOverlayd, StyledModalContent } from "./ModalSigninStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import signinSchema from "../../schemas/signin";

const ModalSignin = ({ modalIsOpen, closeModal, openRegisterModal }) => {
    ReactModal.setAppElement('#root');


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signinSchema)
    });

    const onSubmit = (data) => {
        console.log('Formulário enviado com sucesso', data);
    }

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="box-btn-close">
                                <button className="btn-close" type="button" onClick={closeModal}>
                                    <IoIosCloseCircle />
                                </button>
                            </div>
                            <h2>Login</h2>
                            <label>
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email")}
                                    className="input-email"
                                    placeholder="digite seu e-mail"
                                    required

                                />
                                {errors.email && <p>{errors.email.message}</p>}
                            </label>
                            <label>
                                <input
                                    type="password"
                                    name="password"
                                    {...register("password")}
                                    className="input-password"
                                    placeholder="digite sua senha"
                                    required

                                />
                                {errors.password && <p>{errors.password.message}</p>}
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


