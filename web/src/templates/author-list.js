import { graphql } from 'gatsby';
import React from 'react';
import AuthorGrid from '../components/author/AuthorGrid';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import Pagination from '../components/Pagination';
import SEO from '../components/seo';

export const AuthorsQuery = graphql`
  query authorQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const authors = data.allSanityAuthor.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Tree Services" />
      <div className="container">
        <PageHeader
          title="Tree Services"
          description=" From expert pruning and trimming to tree removal and stump grinding, our certified arborists are dedicated to providing professional and reliable care for your trees. We understand the importance of proper tree maintenance in promoting growth, ensuring safety, and enhancing the overall aesthetics of your outdoor space. Whether you need routine maintenance to keep your trees healthy or emergency services to address storm damage, you can trust our experienced team to deliver exceptional results with precision and care"
        />
        <AuthorGrid authors={authors} />
        {numberOfPages > 1 && (
          <Pagination
            baseURL="/tree-services"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;
