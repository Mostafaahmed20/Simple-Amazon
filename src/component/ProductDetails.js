import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function ProductDetails() {
  const [Newstate, setNewstate] = useState("");

  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.itemId}`)
      .then((res) => res.json())
      .then((json) => setNewstate(json));
  }, []);

  return (
    <div>
      <Row className="row" xs="1">
        <Col className="bg-light border" xs="1">
          <Card
            className="card"
            style={{
              width: "15rem",
            }}
          >
            <img alt="Sample" src={Newstate.image} />
            <CardBody>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>{Newstate.description}</CardText>
            </CardBody>
            <Button>Add to cart</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
