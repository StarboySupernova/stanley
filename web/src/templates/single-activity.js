import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import MyNewPortableText from '../components/MyNewPortableText';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import { SingleCategoryStyles } from '../styles/category/SingleCategoryStyles';

export const query = graphql`
  query SingleActivity($id: String!) {
    sanityActivity(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
  }
`;

function SingleActivity({ data }) {
  const activity = data.sanityActivity;

  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={`Stanley Outdoor & Landscaping-${activity.title}`} />
          <PageHeader title={activity.title} className="pageHeader">
            <MyNewPortableText
              className="textcontainer"
              value={activity._rawDescription}
            />
            <GatsbyImage
              image={activity.coverImage.asset.gatsbyImageData}
              alt={activity.coverImage.alt}
              className="coverImage"
            />
          </PageHeader>
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleActivity;
