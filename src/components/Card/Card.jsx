import { ArticleStyled } from "./CardStyled";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";


const Card = ({title, text, avatar, likes, comments}) => {
    return (
            <ArticleStyled>
                <div className="card-1">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <div>
                        <button className="card-icon-1"><SlLike />{likes}</button>
                        <button className="card-icon-2"><FaRegCommentDots />0</button>
                    </div>
                </div>
                <div className="card-2">
                    <img src="#" alt="imagem da noticia" />
                </div>
            </ArticleStyled>
    )
}

export default Card;