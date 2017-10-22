import React from 'react';
import type { Show as ShowType } from './Api';
import {
  Container,
  Image as StyledImage,
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

class LoadingImage extends React.Component {
  state = {
    loaded: false,
  };

  load(source) {
    const image = new Image();
    image.src = source;
    image.addEventListener('load', () => {
      this.setState({ loaded: true });
    });
  }

  componentDidMount() {
    this.load(this.props.source);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.source !== this.props.source) {
      this.setState({ loaded: false });
      this.load(nextProps.source);
    }
  }

  render() {
    const { source } = this.props;
    const { loaded } = this.state;
    return <StyledImage style={!loaded ? null : { backgroundImage: `url(${source})` }} />;
  }
}

const Show = ({ image, title, location, tags, time, entrance, registrationLink }: ShowType) => {
  return (
    <Container>
      <LoadingImage source={image} />
      <Content>
        <Details>
          <h3>{title}</h3>
          <span>{location}</span>
          <Tags>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</Tags>
        </Details>
        <Aside>
          <StyledDate>{time.getDate()}</StyledDate>
          <Month>{time.toLocaleString('he-IL', { month: 'long' })}</Month>
          <Time>
            {time.getHours()}:{time.getMinutes()}
          </Time>
        </Aside>
      </Content>
      {entrance && (
        <Entrance>
          כניסה מ-<time>
            {entrance.getHours()}:{entrance.getMinutes()}
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
