import styled from "styled-components";

// Estilos com Styled Components
export const Container = styled.div`
  width: 100%;
  height: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    h2{
        color: black;
    }

     /* Responsividade */
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  resize: none;
  height: 100px;

  &:focus {
    outline: none;
    border-color: #333;
  }

    /* Responsividade */
    @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 6px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

   /* Responsividade */
   @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
`;

export const CommentsList = styled.ul`
  list-style: none;
  padding: 0;

   /* Responsividade */
   @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const CommentItem = styled.li`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  color: black;
  p {
    margin: 0;
  }

  small {
    display: block;
    margin-top: 10px;
    color: #999;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.85rem;
  }
`;