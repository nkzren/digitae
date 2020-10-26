import React, { useState, useEffect } from "react";
import { Button, Box, Flex, Link } from "rebass";
import { Input } from "@rebass/forms";
import axios from "axios";

function WaitRoom(props) {
  //   const [playerList, setPlayerName] = useState("");
  const connection = new window.WebSocket("ws://localhost:5001", 'echo-protocol')
  useEffect(() => {
    connection.onopen = () => {
      console.log(`${window.player} connected to WebSocket!`);
    };

    connection.onerror = (error) => {
      console.log("error");
    };

    connection.onmessage = (message) => {
      console.log(message);
    };
  },[]);

  function playersList() {
    var player = axios.get("api/players");
    return player;
  }

  function handleChange(value) {
    connection.send(JSON.stringify({ player: window.player, text: value}))
  }

  return (
    <>
      <Input onChange={e => { handleChange(e.target.value)}}></Input>
    </>
  );
}

export default WaitRoom;
