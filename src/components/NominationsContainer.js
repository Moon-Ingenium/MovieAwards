import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";
import Button from "./Button";
import Wrapper from "./Wrapper";


function Nominate(props) {
    return (
      <Wrapper>
        <Row>
        <Col size="md-8">
        <Card heading="Nominees">
        </Card>
      </Col>
      </Row>
      </Wrapper>
    )
}
  


export default Nominate;