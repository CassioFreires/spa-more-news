import { useEffect, useState } from 'react';
import { SectionStyled } from './SearchStyled';
import {searchNewsByTitleService} from '../../services/news/news.service';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const useQuery = () => {
       return new URLSearchParams(useLocation().search);
    }
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const query = useQuery().get('title');
    const [error, setError] = useState(null);

    useEffect(() => {
        if(query) {
            const news = searchNewsByTitleService(query)
            .then((response => {
                setItems(response)
            }))
            .catch((error) => {
                setError(error)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [query])
    return (
        <SectionStyled>
            {loading == true ? <p>loading</p> : null}
            {items.length != 0 ? 
                console.log(items)
            :
                <p>Não há noticias com este titulo</p>
            }
        </SectionStyled>
    )
}

export default Search;