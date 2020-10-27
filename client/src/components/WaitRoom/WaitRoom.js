import React, { useState, useEffect } from "react";
import { Button, Box, Flex, Text } from "rebass";
import PlayerList from "./PlayerList";
import axios from "axios";
import ChatRoom from "./ChatRoom";
import { useHistory } from "react-router-dom";

function WaitRoom(props) {
  const [playerList, setPlayerList] = useState([]);
  const [player, setPlayer] = useState(props.location.state.player);
  const history = useHistory();

  const [connection, setConnection] = useState(null);

  function handleWebSocket() {
    if (!connection) {
      setConnection(new window.WebSocket("ws://localhost:5001", "echo-protocol"));
    } else {
      connection.onopen = (event) => {
        console.log(`${player.name} connected to WebSocket`);
      };
    }
  }

  function handleStart() {
    connection.send(JSON.stringify({ type: "gameStart" }));
  }

  const fetchPlayerList = () => {
    axios
      .get("/api/players")
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setPlayerList(JSON.parse(response.data));
        } else {
          console.log("player list empty. This is probably an error");
        }
      })
      .catch((reason) => {
        console.log(`Error fetching player list. Reason: ${reason}`);
      });
  };

  useEffect(handleWebSocket);
  useEffect(fetchPlayerList, [playerList.length]);

  return (
    <>
      <Flex>
        <Box width="100%">
          <ChatRoom player={player} fetchPlayerList={fetchPlayerList} connection={connection}></ChatRoom>
        </Box>
        <Flex minWidth="20%" flexDirection="column" justifyContent="space-between">
          <PlayerList playerList={playerList} justifyContent="flex-start"></PlayerList>
          <Button onClick={handleStart} m={2}>
            Start
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default WaitRoom;
