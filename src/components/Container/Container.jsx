import { SectionStyled } from "./ContainerStyled";


const Container = ({children}) => {
    return (
        <SectionStyled>
            {children}
        </SectionStyled>
    )
}

export default Container;