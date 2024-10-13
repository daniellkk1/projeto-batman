import { Elements } from '../../utils/backcards/array'
import { Banner, PartyMain, PartySection } from './style'


export const Home = () => {
    return(
        <>
            <Banner src={require('../../utils/Image/Batman-02.jpg')} alt="banner" />

            <PartyMain>
            <iframe
                width="50%" 
                height="450px" 
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

        </>
    
    )
}