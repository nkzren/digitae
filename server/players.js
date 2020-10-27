const playersList = []

const getPlayersList = () => {
    return JSON.stringify(playersList)
};

const addPlayer = (name) => {
    const player = {
        name: name,
        id: Date.now(),
    };

    playersList.push(player)
    
    console.log(`name: ${player.name}, id: ${player.id}`)
    return player.id
};

const removePlayer = (id) => {
    const playerTemp = playersList.findIndex(remPlayer => remPlayer.id == id);
    console.log(playerTemp)
    if(playerTemp == -1){
        console.log(`id: ${id} not found`)
        return false
    }
    playersList.splice(playerTemp,1)
    console.log(`id: ${id} removed`)
    return true
};

module.exports = {
    getPlayersList,
    addPlayer,
    removePlayer,
};
