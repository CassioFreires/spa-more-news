import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import dadosJson from '../../json/dadosmokado.json'
import { useEffect, useState } from 'react';
import { SectionStyled } from './HomeStyled';
import { findAllService } from '../../services/news/news.service';

const Home = () => {
    const [items, setItems] = useState(null);

    useEffect( () => {
        async function fetchNews () {
            const news = await findAllService();
            return setItems(news)
        }
        fetchNews()
    }, []);
    // verificar dps se é para ficar monitorando a variavel news

    return (
        <SectionStyled>
        {   items && items.data && items.data.news &&
            (
                items.data.news.map((item, index) => 
                    <Card 
                        key={index} 
                        title={item.title}
                        text={item.text}
                        banner={item.banner}
                        user={item.user}
                        likes={item.likes}
                        comments={item.comments}
                        creatAt={item.creatAt}

                />)
            )
        }
        </SectionStyled>
    )
}

export default Home;