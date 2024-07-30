import styled from "styled-components";

export const ArticleStyled = styled.section`
    display: flex;
    flex-direction: row;
    width: 48%;
    margin: 20px auto;
    padding: 5px;
    background-color: #fff;
    border-radius: 5px;

    .icons-home {
        font-size: 1.2rem;
        color: #b9b9b9;
    }

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
              .card-sub-1-9 {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                    span {
                      color: #b9b9b9;
                    }

                    a {
                      color: #b9b9b9;
                      &:hover {
                        text-decoration: underline;
                      }
                    }
                  }
                .card-sub-2{
                  border-top: 2px solid #F0F2F5;
                  border-bottom: 2px solid #F0F2F5;
                  width: 100%;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  align-items: center;
                  padding-top: 10px;
                  padding-bottom: 10px;
                  button {
                    width: 100%;
                    height: 30px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    &:hover {
                      background-color: #ebebeb;
                    }
                  }
                   span{
                    margin-left: 1rem;
                    font-size: .8rem;
                    color: #b9b9b9;
                   }
                }
              .card-sub-3 {
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-top: 20px;
                position: relative;
                  a {
                    text-decoration: underline;
                    width: 10%;
                  }
                  textarea{
                    background-color: #F0F2F5 ;
                    border: none;       /* Remove a borda */
                    outline: none;      /* Remove o contorno ao focar */
                    resize: none;       /* Permite rdimensionamento tanto na horizontal quanto na vertical */
                    overflow: auto;     /* Adiciona barras de rolagem, se necessário */
                    font-size: 16px;    /* Ajusta o tamanho da fonte */
                    width: 100%;        /* Ajusta a largura inicial */
                    box-sizing: border-box;
                    border-radius: 50px;
                    padding-top: 15px;
                    padding-left: 15px;
                  }
                  i {
                    width: 4rem;
                    height: 100%;
                    cursor: pointer;
                    position: absolute;
                    right: 0;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
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
      .card-sub-1-9 {
          margin-top: 100px;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

            span {
              color: #b9b9b9;
            }

            a {
              color: #b9b9b9;
                &:hover {
                  text-decoration: underline;
                }
              }
          }
      .card-sub-2 {
        .icons-home {
          font-size: 1rem;
        }
        width: 100%;
        border-top: 2px solid #F0F2F5;
        border-bottom: 2px solid #F0F2F5;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        button {
          width: 100%;
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
            &:hover {
              background-color: #ebebeb;
            }
          }
          span{
            margin-left: 1rem;
            font-size: .8rem;
            color: #b9b9b9;
          }
      }

      .card-sub-3 {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        position: relative;
        textarea{
          background-color: #F0F2F5 ;
          border: none;       /* Remove a borda */
          outline: none;      /* Remove o contorno ao focar */
          resize: none;       /* Permite rdimensionamento tanto na horizontal quanto na vertical */
          overflow: auto;     /* Adiciona barras de rolagem, se necessário */
          font-size: .8rem;    /* Ajusta o tamanho da fonte */
          width: 100%;        /* Ajusta a largura inicial */
          box-sizing: border-box;
          border-radius: 50px;
          padding-top: 10px;
          padding-left: 10px;
        }
        i {
          width: 4rem;
          height: 100%;
          cursor: pointer;
          position: absolute;
          right: 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
      }
      .card-icon-1 {
        width: 30px;
        border: none;
        background-color: #fff;
        cursor: pointer;
        border-radius: 3px;
      }

    }

    .card-2 {
        width: 50%;
        display: flex;
        flex-direction: row;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #eceaea;

      figure {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;

        }
        figcaption {

            span {
              font-size: .8rem;
            }
        }
      }

    }

`