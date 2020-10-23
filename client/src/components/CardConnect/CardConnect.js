import React, { useState, useEffect } from "react";
import { Button, Box, Flex, Link } from "rebass";
import { Input } from "@rebass/forms";
import axios from "axios"
import { useHistory } from "react-router-dom"

function CardConnect() {
  const [playerName, setPlayerName] = useState("");
  const [test, setTest] = useState("")
  const history = useHistory()

  async function handleConnect() {
    console.log(playerName)
    // axios.get('/testApi')
    if (playerName != "") {
      axios.post('/api/auth/login', {
        'username': playerName,
      })
      .then(res => console.log(res.data))
      history.push("/waitRoom")
    }
    else {
      console.log("bota nome ae vacilaum")
      window.alert('No name, no game')
    }
  }
  return (
    <>
      <Box onSubmit={handleConnect} as='form'>
        <center>
          <Box width={4/5} px={2}>
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
          <Box width={1/2} px={2}>
            <Button variant="primary" mr={2}>
              Connect
            </Button>
            {test}
          </Box>
        </center>
      </Box>
    </>
  );
}

export default CardConnect;
