import { InputStyled } from "./InputStyled"

const Input = ({type, placeholder}) => {
    return (
        <>
            <InputStyled type={type} placeholder={placeholder} />
        </>
    )
}

export default Input;