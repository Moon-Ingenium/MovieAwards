import React, { useState, useEffect } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

function OmdbContainer(props) {

  const [search, setSearch] = useState("");
  const [result, setResult] = useState({
    title:"",
    src: "",
    genre: "",
    released: ""
  });
 
  useEffect(() => {
    searchMovies("")
  }, [])

  function searchMovies(query) {
    API.search(query)
      .then(res => setResult(res.data))
      .catch(err => console.log(err));
  };

  function handleInputChange(event){
    const value = event.target.value;
    const name = event.target.name;
    this.setResult({
      [name]: value
    });
  };

  function handleFormSubmit(event){
    event.preventDefault();
    this.searchMovies(search);
  };

  {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={result.Title || "Search for a Movie to Begin"}
            >
              {result.Title ? (
                <MovieDetail
                  title={result.Title}
                  src={result.Poster}
                  genre={result.Genre}
                  released={result.Released}
                />
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={search}
                onChange={handleInputChange}
                onClick={handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
