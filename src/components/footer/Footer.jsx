import React from 'react';
import { Container, Left, Right, Center, Logo, Desc, SocialContainer, SocialIcon, Title, List, ListItem, ContactItem, Payment } from './FooterStyled';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DIVO.</Logo>
        <Desc>
          Tu tienda en línea de confianza para compras rápidas y convenientes.
          Descubre productos únicos y de calidad al mejor precio desde la
          comodidad de tu hogar. Ofrecemos una amplia selección de productos
          para todos los gustos
        </Desc>
        <SocialContainer>
          <SocialIcon color='3b5999'> <FacebookIcon />  </SocialIcon>
          <SocialIcon color='e4405f'> <InstagramIcon /> </SocialIcon>
          <SocialIcon color='55acee'> <TwitterIcon /> </SocialIcon>
          <SocialIcon color='e60023'> <PinterestIcon/> </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Enlaces</Title>
        <List>
            <ListItem>Terminos y condiciones</ListItem>
            <ListItem>Politicas de privacidad</ListItem>
            <ListItem>Seguimiento de compra</ListItem>
            <ListItem>Trabaja con nosotros</ListItem>
            <ListItem>Contactanos</ListItem>
            <ListItem>Ayuda</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem> <RoomIcon />
        123 Main Street
Anytown, USA 12345
        </ContactItem>
        <ContactItem>
            <PhoneIcon />
        (555) 123-4567
        </ContactItem>
        <ContactItem>
            <EmailIcon />
            contact@email.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
