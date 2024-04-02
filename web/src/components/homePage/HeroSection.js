import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';
import { SectionTitle } from '../typography/Title';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Gala Groove</h1>
            <ParagraphText className="hero__text">
              Experience the magic of youth ingenuity. From intimate gatherings
              to grand celebrations, we bring your vision to life with
              creativity, passion and expertise. Let's make memories together.
              Welcome to Gala Groove
            </ParagraphText>
            <SectionTitle>Our Expertise</SectionTitle>
            <ParagraphText className="hero__text">
              We are the Number 1 internet cafe group, setting the standard for
              uninterrupted connectivity as we boast dependable, onside backup
              power, ensuring you stay unaffected by any stage of load shedding.
              Trust our hardworking staff to keep you connected, always, seven
              days a week, from Sunday to Sunday. Choose us for continuous and
              reliable activity – your gateway to uninterrupted online
              excellence.
            </ParagraphText>
            <ParagraphText>
              We are the top-up hub, the one-stop destination for all your
              vending machine needs. We specialize in smooth shop-to-shop
              transactions, serving as the central hub for spaza shops in the
              vibrant communities of Midrand, Tembisa and especially Mayibuye.
              Our dedicated activity ensures a hassle-free experience, making it
              convenient for businesses to manage their vending machine supplies
              effortlessly.
            </ParagraphText>
            <Button to="/services" tag={Link} className="hero__button">
              Explore Our Services
            </Button>
            <ParagraphText>
              KAZANG • FLASH • iKHOKHA • BLUE LABEL • PREPAID24 • iPAY
            </ParagraphText>
            <ParagraphText className="featuredBlogs__text">
              Where Every Click, Drives You Forward
            </ParagraphText>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/VR.jpg"
              alt="Gala Groove hero image"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
