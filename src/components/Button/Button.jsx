import { ButtonStyled } from "./ButtonStyled"

export const Button = ({text, onClick}) => {
    return (
        <>
            <ButtonStyled onClick={onClick}>
                <span>
                    {text}
                </span>
            </ButtonStyled>
        </>
    )
}

export default Button;