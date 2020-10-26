import React, { useState, useEffect } from "react";
import { Button, Box, Flex, Link } from "rebass";
import { Input } from "@rebass/forms";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CardConnect(props) {
  const [playerName, setPlayerName] = useState("");
  const history = useHistory();

  function handleConnect() {
    console.log(playerName);
    // axios.get('/testApi')
    if (playerName != "") {
      // axios.post('/api/auth/login', {
      //   'username': playerName,
      // })
      handleWebSocketConnection();
    } else {
      console.log("bota nome ae vacilaum");
      window.alert("No name, no game");
    }
  }

  function handleWebSocketConnection(response) {
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    const connection = new WebSocket("ws://localhost:5001");
    connection.onopen = () => {
      console.log(`${playerName} connected to WebSocket!`);
      props.match.params.player = playerName;
      history.push("/waitRoom");
    };

    connection.onerror = (error) => {
      console.log("error");
    };

    connection.onmessage = (message) => {
      console.log(message);
    };
  }

  return (
    <>
      <Box>
        <center>
          <Box width={4 / 5} px={2}>
            <Input
              my={10}
              py={1}
              id="playerName"
              placeholder="Player Name"
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </Box>
        </center>
        <center>
          <Box width={1 / 2} px={2}>
            <Button onClick={handleConnect} variant="primary" mr={2}>
              Connect
            </Button>
          </Box>
        </center>
      </Box>
    </>
  );
}

export default CardConnect;
