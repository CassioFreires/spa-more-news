import { FooterStyled } from "./FooterStyled";


const Footer = () => {
    return (
        <>
            <FooterStyled>
                <div className="footer-main">
                    <div className="footer-sub-1">
                        <h3>Blog de Postagens por Cassio L. Freires Souza</h3>
                        <p>Acompanhe nossas últimas postagens e esteja sempre atualizado com conteúdos relevantes e inspiradores.</p>
                    </div>
                    <div className="footer-sub-2">
                        <ul>
                            <li><h4>Siga-nos nas redes sociais:</h4></li>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Github</a></li>
                        </ul>
                    </div>
                </div>
                <span>© 2024 Cassio L. Freires Souza. Todos os direitos reservados.</span>
            </FooterStyled>
        </>
    )
}
export default Footer;