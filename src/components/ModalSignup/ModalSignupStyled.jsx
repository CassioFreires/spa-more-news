import styled from 'styled-components'


// Estilização do overlay
export const StyledModalSignupOverlayd = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilização do conteúdo do modal
export const StyledModalSignupContent = styled.div`

  position: relative;
  background: white;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;

    h2 {
        margin-bottom: 30px;
        text-align: center;
    }
  }

  label {
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 20px;
    padding: 10px;
    font-size: 16px;
    border: none;
    background-color: #DCDCDC;
    border-radius: 3px;

    &:focus {
        outline: none;
    }
  }

  .input-email {
    width: 80%;
  }

  
  .box-btn-close {
    position: absolute;
    top: -10px;
    right: 0;

    .btn-close {
        border: none;
        background-color: #fff;
        border-radius: 10px;
        font-size: 1.4rem;
        cursor:pointer;
    }
  }

  .box-btn-signin {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    .btn-signin {
        width: 40%;
        padding: 8px;
        font-size: 1rem;
        letter-spacing: 1px;
        border: none;
        border-radius: 3px;
        background-color:  rgba(3,44,96,255);
        cursor: pointer;
        color: #fff;
    }
    span {
        margin-left: 10px;
        cursor: pointer;
        
        &:hover {
            text-decoration: underline;
        }
    }
  }


`;