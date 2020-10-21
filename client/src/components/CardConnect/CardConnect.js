import React, { useState, useEffect } from "react";
import { Button, Box, Flex, Link } from "rebass";
import { Input } from "@rebass/forms";
import axios from "axios"

function CardConnect() {
  const [roomName, setRoomName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [test, setTest] = useState("")

  async function handleConnect() {
    console.log(roomName, playerName)
    // axios.get('/testApi')
    axios.post('/testApi', {
      playerName: playerName,
      roomName: roomName
    })
    .then(res => console.log(res.data))
  }

  return (
    <Flex width={1}>
       <Box width={2 / 3} px={2}>
        <Input
          my={1}
          py={1}
          id="playerName"
          placeholder="Player Name"
          onChange={(e) => setPlayerName(e.target.value)}
        ></Input>
      </Box>
      <Box width={2 / 3} px={2}>
        <Input
          my={1}
          py={1}
          id="roomName"
          placeholder="Room Name"
          onChange={(e) => setRoomName(e.target.value)}
        ></Input>
      </Box>
      <Box width={1 / 3} px={20}>
        <Button variant="outline" mr={2} onClick={handleConnect}>
          Connect
        </Button>
        {test}
      </Box>
    </Flex>
  );
}

export default CardConnect;
