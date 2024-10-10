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
    justify-content: space-evenly;
        article{
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            width: 40%;
            height: 600px;
            font-size: 26px;
                span{
                    width: 15em;
                    height: 75%;
                    font-size: 26px;
                }
                button{
                    height: 45px;
                    padding: 8px;
                    width: 60%;
                    font-size: 22px;
                    font-weight: bold;
                    background-color: red;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    transition: transform 0.3s ease;
                        &:hover{
                        transform: scale(1.05);
                        cursor: pointer;
                    } 
                }
        }
`

export const PartySection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

        div{
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            height: 600px;
            width: 400px;
            display: flex;
            align-items: self-end;
            justify-content: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            transition: transform 0.3s ease;
            border-radius: 5px;
                p{
                    font-weight:bold;
                    background: rgba(0, 0, 0, 0.5);
                    padding: 5px;
                    border-radius: 5px;
                }
                &:hover{
                    transform: scale(1.05);
                    cursor: pointer;
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
