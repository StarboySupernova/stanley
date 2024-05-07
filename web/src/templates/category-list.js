import React from 'react';
import { graphql } from 'gatsby';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import CategoryGrid from '../components/category/CategoryGrid';
import Pagination from '../components/Pagination';

export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
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

function Categories({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;

  return (
    <>
      <SEO title="Garden Landscapes" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="Garden Landscapes"
            description="Creative garden landscapes are more than just a patch of greenery – they're living works of art that evoke emotions and captivate the senses. At Stanley Outdoor & Landscaping, we believe in pushing the boundaries of traditional garden design to create imaginative and inspiring outdoor spaces."
          />
          <CategoryGrid categories={categories} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/garden-landscapes"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default Categories;
