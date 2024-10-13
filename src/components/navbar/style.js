import styled from "styled-components";

export const Menu = styled.div`
  margin-top: 20px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  transform: ${(props) => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s ease-in-out;
  z-index: 1;   
`;

export const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 1rem;
  &:hover {
    background-color: #555;
    color: orange;
  }
`;