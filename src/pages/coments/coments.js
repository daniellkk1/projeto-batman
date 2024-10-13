import { useState } from "react";
import { Button, CommentForm, CommentItem, CommentsList, Container, TextArea } from "./style";



export const CommentsPage = () => {
    const [comments, setComments] = useState([]); // Estado para armazenar os comentários
    const [newComment, setNewComment] = useState(""); // Estado para o texto do novo comentário
  
    // Função para adicionar um novo comentário
    const handleAddComment = (e) => {
      e.preventDefault();
      if (newComment.trim()) {
        const comment = {
          text: newComment,
          date: new Date().toLocaleString(), // Adiciona a data e hora do comentário
        };
        setComments([comment, ...comments]); // Adiciona o novo comentário à lista
        setNewComment(""); // Limpa o campo de texto
      }
    };
  
    return (
      <Container>
        <h2>Comentários</h2>
        <CommentForm onSubmit={handleAddComment}>
          <TextArea
            placeholder="Escreva seu comentário..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button type="submit">Enviar Comentário</Button>
        </CommentForm>
        <CommentsList>
          {comments.length === 0 ? (
            <p>Seja o primeiro a comentar!</p>
          ) : (
            comments.map((comment, index) => (
              <CommentItem key={index}>
                <p>{comment.text}</p>
                <small>Comentado em: {comment.date}</small>
              </CommentItem>
            ))
          )}
        </CommentsList>
      </Container>
    );
  };
  