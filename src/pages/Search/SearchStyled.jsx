import styled from 'styled-components';

export const SectionStyled = styled.section`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    
    article{
        display: flex;
        flex-direction: row;
        width: 90%;
        height: 300px;
        margin: 20px auto;
        padding: 5px;
        background-color: #fff;


    .card-1 {
    width: 70%;
    padding: 10px;

    div {
      display: flex;
      flex-direction: row;
      margin-top: 10px;

      button {
        cursor: pointer;
        padding: 5px;
      }

      button:hover {
        background-color: #cecece;
        transition: background-color ease 0.5s;
        border-radius: 5px;
      }

      .card-icon-1 {
        width: 50px;
        border: none;
        background-color: #fff;
      }

      .card-icon-2 {
        width: 50px;
        margin-left: 20px;
        border: none;
        background-color: #fff;
      }
    }
  }

  .card-2 {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    img {
        height: 80%;
        width: 80%;
        background-color: #f5f5f5;
    }
  }
    }

`