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
              Welcome to Stanley Outdoor & Landscaping, where your outdoor
              dreams come to life. With a passion for crafting breathtaking
              landscapes, we specialize in transforming outdoor spaces into
              havens of natural beauty and serenity. Whether you're envisioning
              a lush garden retreat, a functional and stylish outdoor living
              area, or a meticulously manicured lawn, our team of dedicated
              professionals is here to exceed your expectations. From concept to
              completion, we combine expertise with creativity to design and
              build outdoor spaces that inspire and delight. Explore our
              portfolio and let us turn your outdoor vision into a reality.
            </ParagraphText>
            <Button
              to="`https://wa.me/27678744050?text=I%20would%20like%20to%20chat%20to%20an%20available%20Stanley%20Outdoor%20Landscaping%20representative"
              tag={Link}
              className="hero__button"
            >
              Contact Us
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
