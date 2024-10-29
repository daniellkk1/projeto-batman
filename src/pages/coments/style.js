import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Adiciona flexibilidade para quebrar as colunas em telas menores */
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const ReviewContainer = styled.div`
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Sidebar = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SidebarButton = styled.button`
  background-color: red;
  width: 50%;
  color: white;
  padding: 6px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform 3s ease;
  
  &:hover {
    transform: scale(1.01)
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
    width: 48%; /* Ajusta o tamanho dos botões para se alinhar lado a lado em telas menores */
  }

  @media (max-width: 480px) {
    width: 100%; /* Botões ocupam toda a largura em telas menores */
    margin-bottom: 10px;
  }
`;