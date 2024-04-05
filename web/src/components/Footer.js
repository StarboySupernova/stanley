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
          At Gala Groove, we believe in crafting unforgettable experiences that
          bring people together. From lively gatherings under the stars to
          intimate soirées filled with laughter, our passion for creating
          memorable moments knows no bounds. With a dedication to excellence and
          a commitment to innovation, we curate events that ignite joy, foster
          connections, and leave a lasting impression. Join us in celebrating
          life's special occasions with style, flair, and a touch of magic.
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
          52C9+7MC, Bishop Gaul Ave S, Harare, Zimbabwe
        </ParagraphText>
        <ParagraphText className="copyright">
          © Gala Groove Entertainment Group (PTY) LTD |{' '}
          {new Date().getFullYear()}| All rights reserved
        </ParagraphText>
        <ParagraphText className="transparent">
          © Gala Groove Entertainment Group (PTY) LTD |{' '}
          {new Date().getFullYear()}| All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
