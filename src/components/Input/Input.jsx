import { InputStyled } from "./InputStyled"

const Input = ({type, placeholder, setTitle}) => {
    return (
        <>
            <InputStyled type={type} placeholder={placeholder} onChange={(e) => setTitle(e.target.value)}/>
        </>
    )
}

export default Input;