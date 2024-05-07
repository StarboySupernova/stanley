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
            <h1 className="hero__heading">Stanley Outdoor & Landscaping</h1>
            <ParagraphText className="hero__text">
              Experience the magic of youthful ingenuity. From intimate
              gatherings to grand celebrations, we bring your vision to life
              with creativity, passion and expertise. Let's make memories
              together. Welcome to Stanley Outdoor & Landscaping
            </ParagraphText>
            <Button to="/spotlight" tag={Link} className="hero__button">
              Explore
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/shutterstock_193618733.jpg"
              alt="Stanley Outdoor & Landscaping hero image"
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
