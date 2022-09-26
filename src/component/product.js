import React, { useState } from "react";
import "../App.css";
import { Link, Routes, Route, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css";
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
import ProductDetails from "./ProductDetails";

function Product({ data }) {
  const [catagory, setcatagory] = useState("");
  const [Price, setPrice] = useState("");
  const HandelCatagory = (e) => {
    setcatagory(e.target.value);
  };
  const HandelPrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <div className="SelectOpt">
        <h3>Filter by category</h3>
        <select name="catagory" value={catagory} onChange={HandelCatagory}>
          <option>men's clothing</option>
          <option>electronics</option>
          <option>jewelery</option>
          <option>women's clothing</option>
        </select>
        <h3>Filter by Price </h3>
        <select name="Price" value={Price} onChange={HandelPrice}>
          <option>100</option>
          <option>200</option>
          <option>300</option>
          <option>400</option>
          <option>500</option>
          <option>600</option>
          <option>700</option>
          <option>800</option>
          <option>900</option>
          <option>1000</option>
          <option>1100</option>
          <option>1200</option>
        </select>
      </div>

      <h3>
        You had selected {catagory} and price {Price}
      </h3>

      <div>
        {data !== null ? (
          <div>
            {data
              .filter((v) => {
                return v.category === catagory && v.price <= Price;
              })
              .map((v) => (
                <div className="Container">
                  <Row className="row" xs="2">
                    <Col className="bg-light border" xs="3">
                      <Card
                        className="card"
                        style={{
                          width: "15rem",
                        }}
                      >
                        <img className="image" src={v.image} />
                        <CardBody>
                          <CardTitle tag="h5">{v.title}</CardTitle>
                          <CardTitle tag="h5">{v.id}</CardTitle>

                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Card subtitle
                          </CardSubtitle>
                          <Link
                            to={`item/${v.id}`}
                            style={{
                              width: "100px",
                              height: "50px",
                              borderRadius: "20px",
                              cursor: "pointer",
                            }}
                          >
                            Details
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
              ))}
          </div>
        ) : (
          <h3>no data to show</h3>
        )}
      </div>
      <Routes>
        <Route path="/item/:itemId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default Product;
