const CardSearch = () => {
 return (
    <section>
         <div className="card-1">
                <div className="card-sub-1">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <div className="card-sub-1-9">
                    <span>[nomes-dos-usuarios que curtiu]10</span>
                    <a href="#">2 comentarios</a>
                </div>
                <div className="card-sub-2">
                    <button className="card-icon-1"><SlLike className="icons-home" /><span>Curtir</span></button>
                    <button className="card-icon-1"><FaRegCommentAlt className="icons-home" /><span>Comentar</span></button>
                    <button className="card-icon-1"><FaWhatsapp className="icons-home" /><span>Enviar</span></button>
                    <button className="card-icon-1"><FaRegShareFromSquare className="icons-home" /><span>Compartilhar</span></button>
                </div>
                <form className="card-sub-3">
                    {/* exibir todos os comentario, chamar o endpoint get comentarios */}
                    <textarea name="comment" placeholder="Comente como [nome-do-usuário]">
                    </textarea>
                    <i><IoSend /></i>
                    {/* chamar o endpoint que irá fazer um post e comentar somente se tiver autenticado */}
                </form>
            </div>
            <div className="card-2">
                <figure>
                    <img src="#" alt="imagem da noticia" />
                    <figcaption>
                        <span>publica por: <cite>{user.username} - {creatAt} </cite></span>
                    </figcaption>
                </figure>
            </div>
    </section>
 )
}

export default CardSearch;