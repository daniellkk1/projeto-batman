import styled from "styled-components";

export const ContentFull = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentPho = styled.div`
    height: 100%;
    width: 90%;
    background-color: rgba(50, 50, 50, 0.3);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 40px;
    overflow-y: auto;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);  // 3 colunas para telas menores
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);  // 2 colunas para telas intermediárias
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;  // 1 coluna para telas pequenas
        padding: 20px;
    }
`

export const Card = styled.div`
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            height: 420px;
            width: 100%;  // Tornar o card responsivo dentro da grid
            max-width: 380px;
            display: flex;
            align-items: self-end;
            justify-content: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            transition: transform 0.3s ease;
            border-radius: 5px;

            &:hover{
                    transform: scale(1.05);
                    cursor: pointer;
                }

                @media (max-width: 1200px) {
                    height: 380px;  // Ajuste de altura para telas menores
                }

                @media (max-width: 900px) {
                    height: 350px;
                }

                @media (max-width: 600px) {
                    height: 300px;
                }
`