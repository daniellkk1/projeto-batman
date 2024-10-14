import { ReviewCard } from "../../components/reviewcard/reviewcard";
import { reviews } from "../../utils/backcards/array";
import { Container, ReviewContainer, Sidebar, SidebarButton } from "./style";


export const ReviewList = () => {
  return (
    <Container>
      <ReviewContainer>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            user={review.user}
            avatar={review.avatar}
            date={review.date}
            comment={review.comment}
            rating={review.rating}
          />
        ))}
      </ReviewContainer>
      <Sidebar>
        <SidebarButton>Share Review</SidebarButton>
        <SidebarButton>Respond</SidebarButton>
        <SidebarButton>Download</SidebarButton>
        <SidebarButton>Delete Review</SidebarButton>
      </Sidebar>
    </Container>
  );
};
