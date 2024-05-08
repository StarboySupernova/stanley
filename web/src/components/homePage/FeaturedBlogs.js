import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          blogs {
            id
            title
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const spotlightBlogs = data.allSanitySpotlight.nodes[0].blogs;
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Our Work</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Explore Our Intuitive Artistry in Nature
      </ParagraphText>
      <BlogGrid blogs={spotlightBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
