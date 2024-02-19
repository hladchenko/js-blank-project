import React from "react";
import ReactDOM from "react-dom/client";
import { Demo } from "./components/demo";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container>
      <Demo />
    </Container>
  </React.StrictMode>,
);
