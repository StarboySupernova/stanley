import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Gala Groove</h1>
            <ParagraphText className="hero__text">
              Experience the magic of youthful ingenuity. From intimate
              gatherings to grand celebrations, we bring your vision to life
              with creativity, passion and expertise. Let's make memories
              together. Welcome to Gala Groove
            </ParagraphText>
            <Button to="/spotlight" tag={Link} className="hero__button">
              Explore
            </Button>
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
