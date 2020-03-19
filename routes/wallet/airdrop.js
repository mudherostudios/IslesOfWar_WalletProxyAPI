const express = require('express');
const airDropService = require('../../airdrop-service');

module.exports = async (app) => {
    const router = express.Router();

    router.post('/', async (req, res) => {
        const airDropRequest = req.body;

        console.log('Airdrop Request: ', airDropRequest);

        try {
            await airDropService.unlockWallet();

            console.log('Unlocked wallet');

            const transactionId = await airDropService.sendAirDrop(airDropRequest.playerName);

            console.log('Sent airdrop with transactionId: ', transactionId);

            res.json({
                transactionId
            });
        } catch (err) {
            res
            .status(200)
            .json({
                error: {
                    message: 'Error when sending airdrop'
                }
            });

            console.log('Error when sending airdrop: ', err);
        }
    });

    app.use('/wallet/airdrop', router);
};