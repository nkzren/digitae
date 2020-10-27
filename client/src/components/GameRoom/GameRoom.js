import React, { useState, useEffect } from "react";
import { Text, Box, Flex } from "rebass";
import { Textarea } from "@rebass/forms";
import axios from "axios";

function GameRoom(props) {
  const player = props.location.state.player;
  const connection = window.wsConnection;

  const quote = props.location.state.quote;
  const [userText, setUserText] = useState("");
  const [spaces, setSpaces] = useState(0);

  function handleChange(value) {
    if (connection) {
      setUserText(value);
    }
  }

  useEffect(() => {
    setSpaces(userText.split(" ").length - 1);
  }, [userText]);

  function handleKeyUp() {
    console.log("keyup");
    if (userText === quote.text) {
      connection.send(JSON.stringify({ type: "finished", player: player }));
    }
  }

  function checkWord(correct, userWord) {
    return correct !== userWord;
  }

  return (
    <Box m={1}>
      <Flex maxWidth="100%" m={2} flexDirection="row" flexWrap="wrap">
        {quote?.text
          ? quote.text.split(" ").map((word, index) => {
              if (index == spaces) {
                // Current word
                return (
                  <Text fontWeight="bold" id={index}>
                    {word}&nbsp;
                  </Text>
                );
              } else if (index < spaces && checkWord(word, userText.split(" ")[index])) {
                // Previous words
                return (
                  <Text color="red" id={index}>
                    {word}&nbsp;
                  </Text>
                );
              } else {
                // Next words
                return <Text id={index}>{word}&nbsp;</Text>;
              }
            })
          : null}
      </Flex>
      <Textarea
        m={2}
        maxWidth="97%"
        style={{ resize: "none" }}
        onChange={(e) => handleChange(e.target.value)}
        onKeyUp={handleKeyUp}
      ></Textarea>
    </Box>
  );
}

export default GameRoom;
