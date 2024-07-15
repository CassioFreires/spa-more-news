import styled from "styled-components";

export const InputStyled = styled.input`
    width: 17.75rem; //300px;
    height: 2rem; //25px;
    background-color: #DCDCDC;
    border: none;
    font-size: 1rem;
    border-radius: 5px 0px 0px 5px;
    padding: 5px;

    &:focus {
        outline-color: #c3c3e2;
        outline-width: thin;
        box-shadow: none;
    }
`
