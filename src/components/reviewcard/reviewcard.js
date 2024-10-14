import { Actions, Avatar, Card, Comment, Date, Header, IconButton, Rating, Stars, StyledIconComent, UserInfo, UserName } from "./style";




export const ReviewCard = ({ user, avatar, date, comment, rating, actions }) => {
  return (
    <Card>
      <Header>
        <UserInfo>
          <Avatar avatar={avatar}/>
          <div>
            <UserName>{user}</UserName>
            <Date>{date}</Date>
          </div>
        </UserInfo>
        <Rating>
          <Stars>{'★'.repeat(rating)}</Stars>
          {actions}
        </Rating>
      </Header>
      <Comment>{comment}</Comment>
      <Actions>
        {/* Aqui você pode inserir ícones ou botões */}
        <IconButton>
          <StyledIconComent/>
          <span>7</span>
        </IconButton>
      </Actions>
    </Card>
  );
};