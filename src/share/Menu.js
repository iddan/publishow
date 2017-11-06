import React, { Component } from 'react';
import { isMobile } from '../services/platform';
import { toFacebookLink, toWhatsAppLink } from './providers';
import { copy } from '../services/clipboard';
import { Container, Title, Buttons, ButtonWrap, ButtonIcon, ButtonTitle } from './Menu.styles';
import facebook from './facebook.svg';
import whatsApp from './whatsApp.svg';
import copyIcon from './copy.svg';

const Button = ({ title, icon, onClick }) => (
  <ButtonWrap onClick={onClick}>
    <ButtonIcon source={icon} />
    <ButtonTitle>{title}</ButtonTitle>
  </ButtonWrap>
);

export default class Menu extends Component {
  props: {
    link: string,
  };

  shareOnFacebook = () => {
    window.location = toFacebookLink(this.props.link);
    this.props.onSelect();
  };

  shareOnWhatsApp = () => {
    window.location = toWhatsAppLink(this.props.link);
    this.props.onSelect();
  };

  copy = () => {
    copy(this.props.link);
    this.props.onSelect();
  };

  render() {
    return (
      <Container elevation={5}>
        <Title>שתף עם</Title>
        <Buttons>
          <Button onClick={this.shareOnFacebook} title="פייסבוק" icon={facebook} />
          {isMobile && <Button onClick={this.shareOnWhatsApp} title="ווטסאפ" icon={whatsApp} />}
          <Button onClick={this.copy} title="העתק" icon={copyIcon} />
        </Buttons>
      </Container>
    );
  }
}
