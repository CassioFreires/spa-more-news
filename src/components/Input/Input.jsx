import { InputStyled } from "./InputStyled"

const Input = ({type, placeholder, setQuery, query}) => {
    return (
        <>
            <InputStyled type={type} placeholder={placeholder} onChange={(e) => setQuery(e.target.value)}/>
        </>
    )
}

export default Input;