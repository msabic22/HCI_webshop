import React from "react";
import { Col, Row } from "react-bootstrap";

const TwoColumns = ({ main, children, ...props }) => {
  return (
    <Row className={props.className}>
      <Col
        className="mb-3"
        xs={12}
        sm={{ offset: 1, span: 10 }}
        md={{ offset: 2, span: 8 }}
        lg={{
          offset: 0,
          span: main === "right" ? 5 : main === "left" ? 7 : 6,
        }}
      >
        {children[0]}
      </Col>
      <Col
        xs={12}
        sm={{ offset: 1, span: 10 }}
        md={{ offset: 2, span: 8 }}
        lg={{
          offset: 0,
          span: main === "right" ? 7 : main === "left" ? 5 : 6,
        }}
      >
        {children[1]}
      </Col>
    </Row>
  );
};

export default TwoColumns;
