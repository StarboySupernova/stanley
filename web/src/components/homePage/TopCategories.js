import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
// import CategoryGrid from '../category/CategoryGrid';
import ActivityGrid from '../category/ActivityGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          activity {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Activities</SectionTitle>
      <ParagraphText>Create your ambience - Events done your way</ParagraphText>
    </TopCategoriesStyles>
  );
}

export default TopCategories;
