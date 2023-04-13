
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

const SearchNewsPage = () => {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null);
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString().trim();
    if (searchQuery) {
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);

        const response = await fetch(`/api/search-news?q=${searchQuery}`);
        const articles:NewsArticle[]= await response.json();

        setSearchResults(articles);
      } catch (error) {
        console.log(error);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false)
      }
    }
  };

  return (
    <>
      <Head>
        <title key="title">Rent Me</title>
      </Head>
      <main>
        <h1>Search Rental Product Here</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="search-input">
            <Form.Label>Search query</Form.Label>
            <Form.Control name="searchQuery" placeholder="E.g. politics, sports, ..." />
          </Form.Group>
          <Button type="submit" className="mb-3" disabled={searchResultsLoading}>
            Search
          </Button>
        </Form>
        <div className="d-flex flex-column align-items-center">
          {searchResultsLoading && <Spinner animation="border" />}
          {searchResultsLoadingIsError && <p>Something went wrong. Please, try again</p>}
          {searchResults?.length === 0 && <p>Nothing found. Try different query</p>}
          {searchResults && <NewsArticlesGrid articles={searchResults} />}
        </div>
      </main>
    </>
  );
};
// h1
export default SearchNewsPage;
