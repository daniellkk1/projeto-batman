import { ReviewCard } from "../../components/reviewcard/reviewcard";
import { reviews } from "../../utils/backcards/array";
import { Container, ReviewContainer, Sidebar, SidebarButton } from "./style";


export const ReviewList = () => {
  return (
    <Container>
      <ReviewContainer>
        {reviews.map((review, index) => (
          <>
            <ReviewCard
              key={index}
              user={review.user}
              avatar={review.avatar}
              date={review.date}
              comment={review.comment}
              rating={review.rating}
            />
            <Sidebar>
              <SidebarButton>Compatilhar</SidebarButton>
              <SidebarButton>Responder</SidebarButton>
              <SidebarButton>Baixar</SidebarButton>
              <SidebarButton>Deletar</SidebarButton>
            </Sidebar>
          </>
        ))}
      </ReviewContainer>
    </Container>
  );
};
