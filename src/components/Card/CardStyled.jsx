import styled from "styled-components";

export const ArticleStyled = styled.section`
    display: flex;
    flex-direction: row;
    width: 45%;
    height: 300px;
    margin: 20px auto;
    padding: 5px;
    background-color: #fff;

        &:nth-child(1) {
            width: 100%;
            background-color: #fff;
            height: 400px;

            .card-1 {
                display: flex;
                flex-direction: column;
                align-items: start;

                .card-sub-1 {
                    height:100%;
                    p{
                      margin-top: 1rem;
                    }
                }
                .card-sub-2{
                  width: 100%;

                   span{
                    margin-left: 1rem;
                    font-size: .8rem;
                   }
                }
            }

        }

    .card-1 {
      width: 70%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

    .card-sub-1 {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    .card-sub-2 {
      width: 100%;

      span {
        font-size: .7rem;
      }
    }

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
`