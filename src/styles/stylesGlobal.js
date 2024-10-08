import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: 400; /* Scroll horizontal */
    scrollbar-width: thin; /* Para navegadores como Firefox */
  }

  html, body {
    height: 100%;
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
  }
`

export const ContainerPage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
`
export const ContainerHeader = styled.div`
    height: 80px;
    width: 100vw;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
        ul{
            height: inherit;
            width: inherit;
            display: flex;
            justify-content: space-around;
            align-items: center;
            list-style: none;
                img{
                    height: 120px;
                    width: 100px;
                }
                li{
                    font-weight: bold;
                    font-size: 22px;
                    cursor: pointer;
                        &:hover{
                            color: red;
                        }
                }
        }
`

export const Banner = styled.img`
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 50px;
`

export const PartyMain = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
        span{

            width: 40%;
            height: 600px;
            font-size: 26px;
        }
`

