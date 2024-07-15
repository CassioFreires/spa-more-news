import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container } from "./ErrorPageStyled";

const ErrorPage = () => {
    return (
        <>
            <Header />
                <Container>
                <h1>Página Não Encontrada</h1>
                <p>Desculpe, a página que você está procurando não existe.</p>
                <p>Verifique o URL ou volte para a página inicial.</p>
                </Container>
            <Footer />
        </>
    )
}

export default ErrorPage;