import React from "react";
import "./App.css";
import showResults from "./showResults";
import MyForm from "./MyForm";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Container style={{ padding: 15 }}>
        <Row>
          <Col sm={10}>
            <h3>フォーム画面</h3>
            <MyForm onSubmit={showResults} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
