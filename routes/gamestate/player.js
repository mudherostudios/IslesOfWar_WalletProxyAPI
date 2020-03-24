const express = require('express');
const gamestate = require('../../gamestate');

module.exports = async (app) => {
    const router = express.Router();

    router.get('/:playerName', async (req, res) => {
        const playerName = req.params.playerName;

        console.log('Player check request for: ', playerName);

        try {
            const doesUserExistInGamestate = await gamestate.checkIfPlayerExistInGamestate(playerName);
            if (doesUserExistInGamestate) return res.sendStatus(200);
            res.sendStatus(404);
        } catch (err) {
            res
            .status(200)
            .json({
                error: {
                    message: 'Error when checking if player exists in gamestate'
                }
            });

            console.log('Error when checking if player exists in gamestate: ', err);
        }
    });

    app.use('/gamestate/player', router);
};