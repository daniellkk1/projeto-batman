import { Link } from "react-router-dom";
import {  ContainerHeader, ContainerPage, FooterContainer, FooterContent, FooterLink, FooterLinkItem, FooterLinks, FooterText, GlobalStyle, StyledIcon } from "./styles/stylesGlobal";
import { Rotas } from "./routers/router";


function App() {
  return (
    <>

    <GlobalStyle />

    <ContainerPage>
      <ContainerHeader>
        <div>
          <img src={require('./utils/Image/logo.png')} alt="logo" />
          <StyledIcon/>
        </div>
        <ul>
          <img src={require('./utils/Image/logo.png')} alt="logo" />
          <li><Link style={{textDecoration: 'none',color: 'white'}} to="/">Home</Link></li>
          <li><Link style={{textDecoration: 'none',color: 'white'}} to="/Photos">Fotos</Link></li>
          <li>Comentarios</li>
          <li>Contato</li>
        </ul>
      </ContainerHeader>

      <Rotas/>

      <FooterContainer>
            <FooterContent>
                <FooterText>&copy; 2024 Desenvolvido por Daniel Lima. Todos os direitos reservados.</FooterText>
                <FooterLinks>
                <FooterLinkItem>
                    <FooterLink href="#about">Home</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLink href="#services">Fotos</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLink href="#contact">Comentarios</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLink href="#contact">Contato</FooterLink>
                </FooterLinkItem>
                </FooterLinks>
            </FooterContent>
        </FooterContainer>

    </ContainerPage>
  </>
  );
}

export default App;
