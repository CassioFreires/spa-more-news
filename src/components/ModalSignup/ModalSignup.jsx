import ReactModal from "react-modal";
import { IoIosCloseCircle } from "react-icons/io";
import { StyledModalSignupOverlayd, StyledModalSignupContent } from './ModalSignupStyled';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import signupSchema from "../../schemas/signup";




const ModalSignup = ({ modalIsOpen, closeModal}) => {
    ReactModal.setAppElement('#root');

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(signupSchema)
    })

    const signup = (data) => {
        console.log('Usuário cadastrado com sucesso', data)
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
                <StyledModalSignupOverlayd>
                    <StyledModalSignupContent>
                        <form onSubmit={handleSubmit(signup)}>
                            <div className="box-btn-close">
                                <button className="btn-close" type="button" onClick={closeModal}>
                                    <IoIosCloseCircle />
                                </button>
                            </div>
                            <h2>Cadastre-se</h2>
                            <label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="input-email" 
                                    placeholder="Nome" 
                                    {...register("name")}
                                    required
                                />
                                {errors.name && <p>{errors.name.message}</p>}
                            </label>
                            <label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    className="input-email" 
                                    placeholder="Apelido" 
                                    {...register("username")}
                                    required
                                />
                                {errors.username && <p>{errors.username.message}</p>}
                            </label>
                            <label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    className="input-email" 
                                    placeholder="E-mail"
                                    {...register("email")}
                                    required
                                 />
                                 {errors.email && <p>{errors.email.message}</p>}
                            </label>
                            <label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    className="input-email" 
                                    placeholder="Senha" 
                                    {...register("password")}
                                    required
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                            </label>
                            <label>
                                <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    className="input-email" 
                                    placeholder="Confirme sua senha"
                                    {...register("confirmPassword")}
                                    required
                                />
                                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
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


