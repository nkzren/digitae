import React, { useState, useEffect } from "react";
import { Card, Heading } from "rebass";
import CardConnect from "../CardConnect/CardConnect";
import { BrowserRouter } from "react-router-dom";
import ROUTES, { RenderRoutes } from "../../routes";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("/testApi")
      .then((res) => res.text())
      .then((res) => setResponse(res));
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Card width={512}>
          <center><Heading>Digitae - TypeRacer</Heading></center>
          <RenderRoutes routes={ROUTES}></RenderRoutes>
        </Card>
      </BrowserRouter>
    </div>
  );
}

export default App;
