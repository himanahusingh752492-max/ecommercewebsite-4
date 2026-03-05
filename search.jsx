import React from "react";
import { useLocation } from "react-router-dom";
import { blog } from "./blog";
import Body from "./body";
import { Container, Row } from "react-bootstrap";

function SearchPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query") || ""; // get query from URL

  const filteredBlog = blog.filter((v) =>
    v.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container fluid className="body">
      <Container>
        <Row>
          {filteredBlog.map((v, i) => (
            <Body pitem={v} key={i} />
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default SearchPage;