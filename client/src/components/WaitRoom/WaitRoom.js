import React, { useState, useEffect } from "react";
import { Button, Box, Flex, Link } from "rebass";
import { Input } from "@rebass/forms";
import axios from "axios"

function waitRoom() {
//   const [playerList, setPlayerName] = useState("");
//   const [test, setTest] = useState("")

  function playersList() {
    var player = axios.get('/auth/login')
    return player
  }
  return (
    <>
    </>
  );
}

export default waitRoom;
