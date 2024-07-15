import styled from 'styled-components';

export const FooterStyled = styled.footer`
    width: 100%;
    height: 10rem;
    position: relative;
    bottom: 0;
    background-color: rgba(3,44,96,255); 
    color: #fff;
    padding: 10px;

    p {
        font-size: 0.9rem;
    }
    .footer-main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .footer-sub-1 {
            background-color:rgba(3,44,96,255) ;
            width: 50%;

        }

        .footer-sub-2 {
            background-color: #fff;
            width: 50%;
            color:  rgba(3,44,96,255);
            border-radius: 5px;

            ul {
                display: flex;
                flex-direction: column;
                align-items: center;

                li a:hover {
                    text-decoration: underline;
                    color: rgba(3,44,96,255);
                }
            }
        }
    }

    span {
        margin-top: 25px;
        display: flex;
        justify-content: center;
    }


`