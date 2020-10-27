import React, { useState, useEffect } from "react";
import { Flex, Box, Text, Button } from "rebass";
import { Input } from "@rebass/forms";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ChatRoom({ player, connection, fetchPlayerList }) {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const history = useHistory();

  function handleSendMsg() {
    if (connection) {
      connection.send(
        JSON.stringify({
          type: "chatMsg",
          player: player.name,
          text: message,
          timestamp: Date.now(),
        })
      );
    } else {
      window.alert("Can't reach server");
    }
    setMessage("");
  }

  function handleWebSocket() {
    if (connection) {
      window.wsConnection = connection;

      connection.onmessage = (message) => {
        let data = "";
        try {
          data = JSON.parse(message.data);
          console.log(data);
        } catch (err) {
          console.log("Websocket message is not in JSON format");
        }
        if (data.type) {
          switch (data.type) {
            case "chatMsg":
              setMessageList((oldArray) => [
                ...oldArray,
                {
                  key: data.timestamp,
                  sender: data.player,
                  text: data.text,
                  timestamp: data.timestamp,
                },
              ]);
              break;

            case "connected":
              fetchPlayerList();
              break;
            case "finished":
              window.alert("ACABOOOOOOOOOOOOOOOO");
              break;
            case "gameStart":
              console.log('TESTE')
              history.replace("gameRoom", {
                player: player,
                quote: data.quote
              });
              break;
            default:
              break;
          }
        } else {
          console.log(message);
        }
      };
    }
  }

  useEffect(handleWebSocket, connection)

  return (
    <Flex maxHeight="300px" flexDirection="column" px={2}>
      <Box minHeight="200px" overflowY="scroll" mx={2} p={1}>
        {messageList.map((messageObj) => {
          return (
            <Text key={messageObj.key}>
              [{messageObj.sender}] - {messageObj.text}
            </Text>
          );
        })}
      </Box>
      <Flex flex="end" m={2}>
        <Input
          width={3 / 4}
          mx={1}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></Input>
        <Button ml={2} fontSize={0} onClick={handleSendMsg} value={message}>
          Send
        </Button>
      </Flex>
    </Flex>
  );
}

export default ChatRoom;
