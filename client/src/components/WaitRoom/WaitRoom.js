import React, { useState, useEffect } from "react";
import { Button, Box, Flex, Link } from "rebass";
import { Input } from "@rebass/forms";
import axios from "axios";

function WaitRoom(props) {
  //   const [playerList, setPlayerName] = useState("");
  //   const [test, setTest] = useState("")
  useEffect(() => {
    console.log(props);
  });

  function playersList() {
    var player = axios.get("api/players");
    return player;
  }
  return (
    <>
      <Input></Input>
    </>
  );
}

export default WaitRoom;
