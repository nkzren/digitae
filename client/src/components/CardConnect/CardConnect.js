import React, { useState, useEffect } from "react";
import { Button, Box, Flex, Text } from "rebass";
import { Input } from "@rebass/forms";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CardConnect(props) {
  const [playerName, setPlayerName] = useState("");
  const history = useHistory();

  function handleConnect() {
    if (playerName !== "") {
      axios
        .post("/api/players/add", {
          name: playerName
        })
        .then((res) => {
          history.push({
            pathname: "/waitRoom",
            state: {
              player: {
                name: playerName,
                id: res.data.id
              },
            },
          });
        }).catch((error) => {
          window.alert("Error on player registering")
        });
    } else {
      console.log("bota nome ae vacilaum");
      window.alert("No name, no game");
    }
  }

  return (
    <Box m={10}>
      <Text fontSize={20} p={3}>
        Bem vindo ao Digitae! Digite seu nome e aguarde outros jogadores
      </Text>
      <Flex justifyContent="space-between">
        <Box width="100%" px={1}>
          <Input
            height="90%"
            id="playerName"
            placeholder="Player Name"
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </Box>
        <Box px={3}>
          <Button onClick={handleConnect} variant="primary" mr={1}>
            Connect
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default CardConnect;
