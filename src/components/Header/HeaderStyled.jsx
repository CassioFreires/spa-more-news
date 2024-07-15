import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 95%;
    margin: 0 auto;
    height: 7.5rem; // 120px
    background-color: #fff;
    padding: 10px;
    border-radius: 0px 0px 5px 5px;
    
    
    nav {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .nav-header-1 {
        display: flex;
        flex-direction: row;

        button {
            
            width: 4rem;
            border: none;
            background-color: #DCDCDC ;
            border-radius: 0px 5px 5px 0px;
            cursor: pointer;
            .icon-search {
                width: 50px;
            }
        }

        
    }
    .nav-header-2{
        display: flex;
        flex-direction: row;
        justify-content: center;

        a {
            width: 100px;
            cursor: pointer;
        }
    }

    .nav-header-3 {
        display: flex;
        flex-direction: row;
        justify-content: end;
    }
    div{
        width: 100%;
    }

`




