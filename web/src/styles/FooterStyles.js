import styled from 'styled-components';
import backgroundImage from '../images/Wave.svg';

export const FooterStyles = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  .footer__menuList {
    margin-top: 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: transparent; /* Make the text transparent */
        text-shadow: 0 0 5px var(--light-gradient); /* Apply gradient as text shadow */
        /* This will create a shadow behind the text with the gradient, giving the illusion of a gradient text effect. This technique might not work as expected in all situations, and it may not be supported by all browsers.*/
        font-size: 1.6rem;
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--gray);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }
`;
