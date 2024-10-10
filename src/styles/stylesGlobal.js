import styled, { createGlobalStyle } from "styled-components";

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
export const FooterContainer = styled.footer`
  background-color: black;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
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
  display: flex;
  justify-content: center;
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

