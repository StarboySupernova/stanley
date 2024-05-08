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
          Thank you for visiting Stanley Outdoor & Landscaping. Let's connect
          and bring your outdoor vision to life. Contact us today to schedule a
          consultation or inquire about our services. Follow us on social media
          for inspiration and updates. We look forward to collaborating with you
          to create the outdoor oasis you've always dreamed of. Your journey to
          a stunning landscape begins here.
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
          27 Hans Merensky St, Birchleigh North, Kempton Park, 1618, South
          Africa
        </ParagraphText>
        <ParagraphText className="copyright">
          © Stanley Outdoor & Landscaping Group (PTY) LTD |{' '}
          {new Date().getFullYear()}| All rights reserved
        </ParagraphText>
        <ParagraphText className="transparent">
          © Stanley Outdoor & Landscaping Group (PTY) LTD |{' '}
          {new Date().getFullYear()}| All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
