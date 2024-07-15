import { HeaderStyled } from "./HeaderStyled";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ModalSignup from "../ModalSignup/ModalSignup";
import  ModalSignin from "../Modal/ModalSignin";

import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {

    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

     // Função do Modal de cadastre-se
    function openRegisterModal() {
        setIsOpen(false)
        setIsRegisterModalOpen(true);
    }

    function closeRegisterModal(){
        setIsRegisterModalOpen(false);
    }

    // Função do Modal de login/entrar
    function openModalSignin() {
        setIsOpen(true);
    }

    function closeModalSignin() {
        setIsOpen(false);
    }

    const handleClick = (e) => {
        navigate('/search')
    }

    return (
        <HeaderStyled>
            <ModalSignin modalIsOpen={modalIsOpen} closeModal={closeModalSignin} openRegisterModal={openRegisterModal}/>
            <ModalSignup modalIsOpen={isRegisterModalOpen} closeModal={closeRegisterModal}/>
            <nav>
                <div className="nav-header-1">
                    <Input type="text" placeholder={'Search news by title'} />
                    <button onClick={(e) => handleClick(e)}><IoSearchOutline className="icon-search" /></button>
                </div>
                <div className="nav-header-2">
                    <Link to={'/'}><img src="/images/logo.png" alt="imagem do logo" /></Link>
                </div>
                <div className="nav-header-3">
                    <Button text={'Entrar'} onClick={openModalSignin} />
                </div>
            </nav>
        </HeaderStyled>
    )
}

export default Header;