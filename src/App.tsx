import { Link } from "react-router-dom";
import {  ContainerHeader, ContainerPage, FooterContainer, FooterContent, FooterLink, FooterLinkItem, FooterLinks, FooterText, GlobalStyle, StyledIcon, StyledIconClose } from "./styles/stylesGlobal";
import { Rotas } from "./routers/router";
import { useContext } from "react";
import { MenuContext } from "./context/usecontext";
import { Navbar } from "./components/navbar/navbar";


function App() {

  const { isOpen, toggleMenu } = useContext(MenuContext);

  return (
    <>

    <GlobalStyle />

    <ContainerPage>
      <ContainerHeader>
        <div>
          <img src={require('./utils/Image/logo.png')} alt="logo" />
          {isOpen ? <StyledIconClose onClick={toggleMenu}/> : <StyledIcon onClick={toggleMenu}/>}
        </div>
        <ul>
          <img src={require('./utils/Image/logo.png')} alt="logo" />
          <li><Link style={{textDecoration: 'none',color: 'white'}} to="/">Home</Link></li>
          <li><Link style={{textDecoration: 'none',color: 'white'}} to="/Photos">Fotos</Link></li>
          <li><Link style={{textDecoration: 'none',color: 'white'}} to="/Coments">Comentarios</Link></li>
          <li>Contato</li>
        </ul>
      </ContainerHeader>

      <Navbar/>

      <Rotas/>

      <FooterContainer>
            <FooterContent>
                <FooterText>&copy; 2024 Desenvolvido por Daniel Lima. Todos os direitos reservados.</FooterText>
                <FooterLinks>
                <FooterLinkItem>
                  <Link to="/" >
                    <FooterLink href="#about">Home</FooterLink>
                  </Link>
                </FooterLinkItem>
                <FooterLinkItem>
                  <Link to="/Photos" >
                    <FooterLink href="#services">Fotos</FooterLink>
                  </Link>
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
