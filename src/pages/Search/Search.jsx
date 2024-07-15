import { useEffect, useState } from 'react';
import dadosJson from '../../json/dadosmokado.json';
import { SectionStyled } from './SearchStyled';
import { SlLike } from 'react-icons/sl';
import { FaRegCommentDots } from 'react-icons/fa';


const Search = () => {

    return (
        <SectionStyled>
            {
                dadosJson.map((item, index) => {
                    return (
                        <article>
                            <div className="card-1">
                                <h3>{item.titulo}</h3>
                                <p>{item.texto}</p>
                                <div>
                                    <button className="card-icon-1"><SlLike />{item.like}</button>
                                    <button className="card-icon-2"><FaRegCommentDots />0</button>
                                </div>
                            </div>
                            <div className="card-2">
                                <img src="#" alt="imagem da noticia" />
                            </div>
                        </article>
                    )
                })
            }
        </SectionStyled>
    )
}

export default Search;