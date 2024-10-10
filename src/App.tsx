import { Banner, ContainerHeader, ContainerPage, FooterContainer, FooterContent, FooterLink, FooterLinkItem, FooterLinks, FooterText, GlobalStyle, PartyMain, PartySection } from "./styles/stylesGlobal";
import { Elements } from "./utils/backcards/array";

function App() {
  return (
    <>

    <GlobalStyle />

    <ContainerPage>
      <ContainerHeader>
        <ul>
          <img src={require('./utils/Image/logo.png')} alt="logo" />
          <li>Home</li>
          <li>Fotos</li>
          <li>Comentarios</li>
          <li>Contato</li>
        </ul>
      </ContainerHeader>

    <Banner src={require('./utils/Image/Batman-02.jpg')} alt="banner" />

    <PartyMain>
      <iframe
          width="50%" 
          height="600px" 
          src="https://www.youtube.com/embed/rsQEor4y2hg?si=5Ekx_f6Cg_0plg--" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
      </iframe>
      <article>
        <span>
          
        Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.

        </span>

        <button>Comprar ingresso</button>
      </article>
    </PartyMain>

    <PartySection>

      {Elements.map((item) => {
        return(
          <div style={{
            backgroundImage: `url(${item.image})`}}>
            <p>{item.name}</p>
          </div>
        )
      })}

    </PartySection>

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
