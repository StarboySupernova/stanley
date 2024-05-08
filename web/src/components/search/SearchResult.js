import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import {
  AuthorSearchResultItem,
  BlogSearchResultItem,
  CategorySearchResultItem,
  ActivitySearchResultItem,
} from './SearchResultItem';
import NewParagraphText from '../typography/NewParagraphText';

function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  authorsIndexStore,
  activitiesIndexStore,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  );
  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store
  );
  const authorsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(authorsIndexStore.index),
    authorsIndexStore.store
  );
  const activitiesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(activitiesIndexStore.index),
    activitiesIndexStore.store
  );

  if (
    blogsResult.length === 0 &&
    categoriesResult.length === 0 &&
    authorsResult.length === 0 &&
    activitiesResult.length === 0
  ) {
    return <NewParagraphText>No Result Found.</NewParagraphText>;
  }

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <NewParagraphText>Spotlight</NewParagraphText>
          {blogsResult.map((result) => (
            <BlogSearchResultItem key={result.id} blog={result} />
          ))}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <NewParagraphText>Garden Landscapes</NewParagraphText>
          {categoriesResult.map((result) => (
            <CategorySearchResultItem key={result.id} category={result} />
          ))}
        </>
      )}
      {authorsResult.length > 0 && (
        <>
          <NewParagraphText>About Our Work</NewParagraphText>
          {authorsResult.map((result) => (
            <AuthorSearchResultItem key={result.id} author={result} />
          ))}
        </>
      )}
      {activitiesResult.length > 0 && (
        <>
          <NewParagraphText>Lawn-Care</NewParagraphText>
          {activitiesResult.map((result) => (
            <ActivitySearchResultItem key={result.id} activity={result} />
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;
