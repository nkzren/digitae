import React, { useState, useEffect } from 'react'
import { Box, Image } from 'rebass'
import keyboard from '../../img/keyboard.svg'

function App() {
  const [ response, setResponse ] = useState('')

  useEffect(() => {
    fetch('/testApi')
      .then(res => res.text())
      .then(res => setResponse(res))
  })

  return (
    <div className="App">
      <Box
        p={8}
        fontSize={4}
        width={[ 1/4, 1/2, 1 ]}
        color='black'
        bg='primary'>
          <Image
            src={keyboard}
            sx={{
              alignSelf: 'middle',
              width: [ '100%', '50%' ],
              borderRadius: 0,
            }}
          />
      </Box>
    </div>
  );
}

export default App;
