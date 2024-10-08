import { Banner, ContainerHeader, ContainerPage, GlobalStyle, PartyMain } from "./styles/stylesGlobal";




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
      <span>
        
      Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade. Com apenas alguns aliados de confiança - Alfred Pennyworth (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) - entre a rede corrupta de funcionários e figuras importantes do distrito, o vigilante solitário se estabeleceu como a única personificação da vingança entre seus concidadãos. Durante uma de suas investigações, Bruce acaba envolvendo a si mesmo e Gordon em um jogo de gato e rato, ao investigar uma série de maquinações sádicas em uma trilha de pistas enigmáticas estabelecida pelo vilão Charada. Quando o trabalho acaba o levando a descobrir uma onda de corrupção que envolve o nome de sua família, pondo em risco a própria integridade e as memórias que tinha sobre seu pai, Thomas Wayne, as evidências começam a chegar mais perto de casa, precisando, Batman, forjar novos relacionamentos, para assim desmascarar o culpado e fazer justiça ao abuso de poder e à corrupção que há muito tempo assola Gotham City.

      </span>
    </PartyMain>


    </ContainerPage>
  </>
  );
}

export default App;
