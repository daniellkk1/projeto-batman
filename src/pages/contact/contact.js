import { Button, ContactContainer, FormContainer, Input, TextArea, Title } from "./styled";


export const ContactPage = () => {
    return (
      <ContactContainer>
        <FormContainer>
          <Title>Contanto</Title>
          <Input type="text" placeholder="Seu nome" required />
          <Input type="email" placeholder="Seu Email" required />
          <TextArea rows="5" placeholder="Deixe uma mensagem" required />
          <Button type="submit">Enviar Mensagem</Button>
        </FormContainer>
      </ContactContainer>
    );
  };