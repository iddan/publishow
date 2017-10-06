import React from 'react';
import { decode } from 'he';
import {
  Container,
  Image,
  Aside,
  Content,
  Details,
  StyledDate,
  Month,
  Time,
  Tags,
  Tag,
  Footer,
  Button,
  Entrance,
} from './Show.styles';

const Show = ({
  image,
  title,
  location,
  tags,
  time,
  entrance,
  registrationLink,
}: {
  image: string,
  title: string,
  location: string,
  tags: string[],
  time: number,
  entrance: number,
  registrationLink: string,
}) => {
  const date = new Date(time);
  const entranceDate = entrance && new Date(entrance);
  return (
    <Container>
      <Image style={{ backgroundImage: `url(${image})` }} />
      <Content>
        <Details>
          <h3>{decode(title)}</h3>
          <span>{location}</span>
          <Tags>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</Tags>
        </Details>
        <Aside>
          <StyledDate>{date.getDate()}</StyledDate>
          <Month>{date.toLocaleString('he-IL', { month: 'long' })}</Month>
          <Time>
            {date.getHours()}:{date.getMinutes()}
          </Time>
        </Aside>
      </Content>
      {entranceDate && (
        <Entrance>
          כניסה מ-<time>
            {entranceDate.getHours()}:{entranceDate.getMinutes()}
          </time>
        </Entrance>
      )}
      {registrationLink && (
        <Footer>
          <a href={registrationLink}>
            <Button type="flat">להרשמה</Button>
          </a>
        </Footer>
      )}
    </Container>
  );
};

export default Show;
