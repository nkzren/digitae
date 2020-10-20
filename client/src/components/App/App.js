import React, { useState, useEffect } from 'react'
import { Card, Heading } from 'rebass'
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
      <Card width={512}>
        <Heading>Text</Heading>
        {response}
      </Card>
    </div>
  );
}

export default App;
