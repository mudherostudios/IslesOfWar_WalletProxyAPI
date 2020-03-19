const wallet = require('./wallet');

const unlockWallet = async (timeInSeconds = 30) => {
    return await wallet.unlockWallet(timeInSeconds);
};

const sendAirDrop = async (playerName) => {
    const airDropRequest = {
        cmd: {
            airDrop: {
                players: [playerName],
                amount: [
                    10000, // Warbux
                    20000, // Oil
                    20000, // Metal
                    20000  // Concrete
                ],
                reason: 'Airdrop'
            }
        }
    };

    const commandEscaped = JSON.stringify(JSON.stringify(airDropRequest)); // Double stringify object to first stringify then escape quotes

    return await wallet.sendNameUpdate(commandEscaped); // Return a transactionId
};

module.exports = {
    unlockWallet,
    sendAirDrop
};