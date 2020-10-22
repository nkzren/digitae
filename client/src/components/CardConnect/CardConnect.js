import React, { useState, useEffect } from "react";
import { Button, Box, Flex, Link } from "rebass";
import { Input } from "@rebass/forms";
import axios from "axios"

function CardConnect() {
  const [playerName, setPlayerName] = useState("");
  const [test, setTest] = useState("")

  async function handleConnect() {
    console.log(playerName)
    // axios.get('/testApi')
    if (playerName != "") {
      axios.post('/auth/login', {
        'username': playerName,
      })
      .then(res => console.log(res.data))
      window.location.replace('/waitRoom')
    }
    else {
      console.log("bota nome ae vacilaum")
      window.alert('No name, no game')
    }
  }
  return (
    <>
        <center><Box width={4/5} px={2}>
          <Input
            my={10}
            py={1}
            id="playerName"
            placeholder="Player Name"
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </Box></center>
        <center><Box width={1/2} px={2}>
          <Button variant="primary" mr={2} onClick={handleConnect}>
            Connect
          </Button>
          {test}
        </Box>
      </center>
    </>
  );
}

export default CardConnect;
