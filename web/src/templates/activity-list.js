import React from 'react';
import { graphql } from 'gatsby';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import ActivityGrid from '../components/category/ActivityGrid';
import Pagination from '../components/Pagination';

export const ServiceListQuery = graphql`
  query activitiesQuery($limit: Int!, $offset: Int!) {
    allSanityActivity(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function Activity({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const activities = data.allSanityActivity.nodes;

  return (
    <>
      <SEO title="Lawn Care" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="Lawn Care"
            description="Lawn care is the foundation of a beautiful outdoor space, and at Stanley Outdoor & Landscaping, we take pride in nurturing healthy and vibrant lawns that enhance the beauty of your property. Our comprehensive lawn care services are tailored to meet the unique needs of your landscape, from regular mowing and edging to fertilization and weed control. We understand that a lush, green lawn is not only visually appealing but also contributes to a healthier environment and increases the value of your home. With our expertise and attention to detail, you can trust us to keep your lawn looking its best year-round, so you can spend more time enjoying your outdoor oasis and less time worrying about maintenance."
          />
          <ActivityGrid activities={activities} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/lawn-care"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Activity;
