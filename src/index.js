import React from "react";
import ReactDOM from "react-dom/client";
import { Demo } from "./components/Demo";
import { Container } from "react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container>
      <Demo />
    </Container>
  </React.StrictMode>,
);
