import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Card, Row, Col, Container } from "react-bootstrap";
import type { RootState } from "../redux/store";

const CountryList: React.FC = () => {
  const [initialVisibleCards, setInitialVisibleCards] = useState(10);
  const countries = useSelector(
    (state: RootState) => state.countries.countries
  );

  const hasMoreCountries = countries.length > initialVisibleCards;

  const handleViewMore = () => {
    setInitialVisibleCards((previousState) => previousState + 10);
  };

  return (
    <Container className="country-card-box mt-4 p-0">
      <Row className="g-3 mb-3">
        {countries.length > 0
          ? countries.slice(0, initialVisibleCards).map((country, index) => (
              <Col key={index} sm={12} md={6} className="">
                <Card>
                  <Card.Img variant="top" src={country.flag} />
                  <Card.Body>
                    <Card.Title>{country.name}</Card.Title>
                    <Card.Text>{country.region}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : null}
      </Row>
      {hasMoreCountries ? (
        <Row>
          <Col className="d-flex justify-content-center mb-3">
            <button className="view-more-button" onClick={handleViewMore}>
              View More
            </button>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

export default CountryList;
