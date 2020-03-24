const sqlite = require('sqlite');
const config = require('./config');

const checkIfPlayerExistInGamestate = async (playerName) => {
    const db = await sqlite.open(config.ISLESOFWAR_GAMESTATE_DB);
    const gameState = await db.get('SELECT * FROM xayagame_current WHERE key="gamestate"');

    const gameStateParsed = JSON.parse(Buffer.from(gameState.value).toString('utf8'));

    return !!Object.keys(gameStateParsed.players).find(player => player.toLowerCase() === playerName.toLowerCase());
};

module.exports = {
    checkIfPlayerExistInGamestate
};