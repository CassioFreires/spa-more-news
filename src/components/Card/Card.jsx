import { ArticleStyled } from "./CardStyled";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";


const Card = ({ title, text, banner, user, avatar, likes, comments, creatAt }) => {
    return (
        <ArticleStyled>
            <div className="card-1">
                <div className="card-sub-1">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <div className="card-sub-2">
                    <button className="card-icon-1"><SlLike />{likes}</button>
                    <span>publica por: <cite>{user.username} - {creatAt} </cite></span>
                </div>
            </div>
            <div className="card-2">
                <img src="#" alt="imagem da noticia" />
            </div>
        </ArticleStyled>
    )
}

export default Card;