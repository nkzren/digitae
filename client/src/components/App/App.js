import React, { useState, useEffect } from "react";
import { Card, Heading } from "rebass";
import { BrowserRouter } from "react-router-dom";
import ROUTES, { RenderRoutes } from "../../routes";

function App(props) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("/testApi")
      .then((res) => res.text())
      .then((res) => setResponse(res));
  });

  return (
    <div className="App" style= {{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <BrowserRouter>
        <Card width={350} sx={{
        p: 1,
        borderRadius: 10,
      }}>
          <center>
            <Heading>Digitae - TypeRacer</Heading>
          </center>
          <RenderRoutes routes={ROUTES}></RenderRoutes>
        </Card>
      </BrowserRouter>
    </div>
  );
}

export default App;
