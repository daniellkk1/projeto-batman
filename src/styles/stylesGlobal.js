import styled, { createGlobalStyle } from "styled-components";
import { IoMenu } from "react-icons/io5";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 500;
    font-style: normal;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    display: flex;
    flex-direction: column;
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

                div{
                  display:none;
                  width: 90%;
                  height:inherit;
                  justify-content: space-between;
                  align-items: center;
                    img{
                      height: 120px;
                      width: 100px;
                      display: none;
                  }

                      @media(max-width: 768px){
                      display: flex;
                    }
                }

                @media(max-width: 768px){
                  display: none;
                }
        }

        div{
                  display:none;
                  width: 90%;
                  height:inherit;
                  justify-content: space-between;
                  align-items: center;
                    img{
                      height: 120px;
                      width: 100px;
                  }

                      @media(max-width: 768px){
                      display: flex;
                    }
                }
`

export const StyledIcon = styled(IoMenu)`
  color: orange;
  font-size: 50px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;
export const FooterContainer = styled.footer`
  background-color: black;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  width: 100%;      // Garante que o footer ocupe toda a largura da página
  display: block;   // Garante que o footer tenha comportamento de bloco
  position: relative;  // Remover qualquer possibilidade de posição absoluta/fixa
  z-index: 1;  
`;

export const FooterContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  display: none;
  justify-content: center;
    @media(max-width: 768px){
            display: flex;
          }
`;

export const FooterLinkItem = styled.li`
  margin: 0 15px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 10px;
`;

export const SocialMediaLink = styled.a`
  color: #fff;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

