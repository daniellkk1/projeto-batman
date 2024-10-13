import styled from "styled-components";

export const Banner = styled.img`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 50px;

  @media(max-width: 768px) {
    height: 60vh;
    background-size: cover;
  }
`

export const PartyMain = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;

  iframe{
    width: 90%;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 600px;
    font-size: 26px;

    span {
      width: 90%;
      height: 50%;
      font-size: 26px;
      text-align: center;

      @media(max-width: 1068px) {
        width: 80%;
        font-size: 20px;
      }
    }

    button {
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

      &:hover {
        transform: scale(1.05);
        cursor: pointer;
      }

      @media(max-width: 768px) {
        width: 90%;
        font-size: 18px;
      }
    }

    @media(max-width: 1068px) {
        width: 100%;
      }
  }

  @media(max-width: 1068px) {
    flex-direction: column;
    height: auto;
  }
`

export const PartySection = styled.section`
  padding: 15px;
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px; /* Espaçamento horizontal entre os cards */

  div {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 600px;
    width: 400px;
    display: flex;
    align-items: self-end;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: transform 1s ease;
    border-radius: 5px;

    p {
      font-weight: bold;
      background: rgba(0, 0, 0, 0.5);
      padding: 5px;
      border-radius: 5px;
      text-align: center;
    }

    &:hover {
      transform: scale(1.01);
      cursor: pointer;
    }

    /* Responsividade para tablets */
    @media(max-width: 768px) {
      width: 90%;
      height: 400px;
    }

    /* Responsividade para smartphones */
    @media(max-width: 480px) {
      width: 100%;
      height: 300px;
    }

    /* Ajuste para iPhones pequenos */
    @media(max-width: 375px) {
      height: 250px;
    }

    /* Ajuste final para telas muito pequenas (320px) */
    @media(max-width: 320px) {
      height: 220px;
    }
  }

  /* Responsividade para dispositivos menores: empilha os cards verticalmente */
  @media(max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 20px; /* Espaçamento vertical entre os cards no modo coluna */
    justify-content: center;
  }
`
