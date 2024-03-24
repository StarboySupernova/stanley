import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          "Thank you for choosing Gala Groove Internet Cafe. Your digital
          journey matters to us. Enjoy high-speed internet, computer services,
          and collaborative spaces. Elevate your experience with software
          setups, online courses, and more. Connect, create, and explore with
          us. Your satisfaction is our priority. Connect with us again for a
          seamless blend of technology and hospitality. Gala Groove Internet
          Cafe – Your pathway to a connected world."
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          1954 Cnr Intakaza & Edmond Shezi Street, Mayibuye, Commercia, Midrand,
          1685 South Africa
        </ParagraphText>
        <ParagraphText className="copyright">
          © Gala Groove Group Internet Cafe (PTY) LTD |{' '}
          {new Date().getFullYear()}| All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
