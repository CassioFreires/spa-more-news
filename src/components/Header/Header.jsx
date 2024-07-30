import { HeaderStyled } from "./HeaderStyled";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ModalSignup from "../ModalSignup/ModalSignup";
import ModalSignin from "../Modal/ModalSignin";

import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { searchNewsByTitleService } from "../../services/news/news.service";

const Header = () => {

    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    // Função do Modal de cadastre-se
    function openRegisterModal() {
        setIsOpen(false)
        setIsRegisterModalOpen(true);
    }

    function closeRegisterModal() {
        setIsRegisterModalOpen(false);
    }

    // Função do Modal de login/entrar
    function openModalSignin() {
        setIsOpen(true);
    }

    function closeModalSignin() {
        setIsOpen(false);
    }
    const [items, setItems] = useState(null);
    const [query, setQuery] = useState('');
    const [queryAlReady, setQueryAlReady] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        setQueryAlReady(query)
        navigate(`/search?title=${query}`)
    }
  
    useEffect(() => {
            if(query) {
                const news = searchNewsByTitleService(queryAlReady)
                .then((response) => {
                    setItems(response)
                })
                .catch((error) => {
                    setError(error)
                })
              
            }
    }, [queryAlReady])

    return (
        <HeaderStyled>
            <ModalSignin modalIsOpen={modalIsOpen} closeModal={closeModalSignin} openRegisterModal={openRegisterModal} />
            <ModalSignup modalIsOpen={isRegisterModalOpen} closeModal={closeRegisterModal} />
            <nav>
                <div className="nav-header-1">
                   <form onSubmit={handleSearch}>
                    <Input 
                            type="text" 
                            setQuery={setQuery}
                            query={query}
                            placeholder={'Digite o titulo da notícia'} 
                        />
                        <button>
                                <IoSearchOutline className="icon-search" />
                        </button>
                   </form>
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