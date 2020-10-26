const playersList = ['eu', 'voce', 'zooboomafoo']

const player = {
      name: '',
      id: Date.now(),
  };

const getPlayersList = () => {
    const playersLista = ['eu', 'voce', 'zooboomafoo']

    return playersLista
};

const addPlayer = (name) => {
    new player
    player.name = name
    player.id = Date.now()

    playersList.push(player)
    console.log("%s added", name)
    return player.id
};

const removePlayer = (id) => {
    var playerTemp = playersList.find(remPlayer => remPlayer.id === id);
    playersList.splice(playerTemp)
};

const getNumberPlayersList = () => {
    return playersList.length
};