import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #121212;
  color: #f5f5f5;
  padding: 20px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #ffffff;
`;

export const Input = styled.input`
  background-color: #333;
  color: #fff;
  border: 1px solid #444;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: 1em;

  &:focus {
    border-color: #6200ee;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  background-color: #333;
  color: #fff;
  border: 1px solid #444;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: 1em;
  resize: vertical;

  &:focus {
    border-color: #6200ee;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: red;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    background-color: #7e3ff2;
  }
`;