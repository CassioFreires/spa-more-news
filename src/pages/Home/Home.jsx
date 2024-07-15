import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import dadosJson from '../../json/dadosmokado.json'
import { useEffect, useState } from 'react';
import { SectionStyled } from './HomeStyled';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(dadosJson)
    }, []);

    return (
        <SectionStyled>
            {items.map((item, index) => <Card
                key={index} 
                title={item.titulo}
                text={item.texto}
                avatar={item.avatar}
                likes={item.like}
                comments={item.comentario}
            />)}
        </SectionStyled>
    )
}

export default Home;