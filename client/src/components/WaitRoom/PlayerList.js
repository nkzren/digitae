import { Input } from "@rebass/forms";
import React, { useState, useEffect } from "react";
import { Flex, Box, Text, Button } from "rebass";
import axios from "axios"

function PlayerList({ playerList }) {

  return (
    <Flex justifyContent="flex-start">
      <Box>
        <Text fontWeight="bold">Players: {playerList.length}</Text>
        {playerList
          ? playerList.map((player) => {
              return <Text key={player.name} pr={2}>{player.name}</Text>;
            })
          : null}
      </Box>
    </Flex>
  );
}

export default PlayerList;
