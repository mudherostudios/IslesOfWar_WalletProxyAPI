const { exec } = require('child_process');
const config = require('./config');

const unlockWallet = () => {
    return new Promise((resolve, reject) => {
        exec(`"${config.XAYA_CLI_PATH}\\xaya-cli" -rpcwallet=vault.dat walletpassphrase "${config.WALLET_PASSWORD}" 300`, (error, stdout, stderr) => {
            if (error || stderr) reject(error ? error.message : stderr);
            resolve(stdout);
        });
    });
};

const sendNameUpdate = (command) => {
    return new Promise((resolve, reject) => {
        exec(`"${config.XAYA_CLI_PATH}\\xaya-cli" -rpcwallet=vault.dat name_update "g/iow" ${command}`, (error, stdout, stderr) => {
            if (error || stderr) reject(error ? error.message : stderr);
            resolve(stdout);
        });
    });
};

module.exports = {
    unlockWallet,
    sendNameUpdate
};