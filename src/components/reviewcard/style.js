import styled from "styled-components";
import { FaRegComment } from "react-icons/fa";

export const StyledIconComent = styled(FaRegComment)`
  color: teal;
  font-size: 26px;
  margin-right: 10px;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

// Estilos com Styled Components
export const Card = styled.div`
  border: 1px solid #E1E1E1;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.avatar});

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

export const UserName = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: black;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Date = styled.span`
  font-size: 12px;
  color: #888;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 26px;

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const Stars = styled.div`
  color: gold;
  margin-right: 10px;

  @media (max-width: 480px) {
    margin-right: 5px;
  }
`;

export const Comment = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
  margin-bottom: 0;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;

  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  color: #888;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #00aaff;
  }
`;