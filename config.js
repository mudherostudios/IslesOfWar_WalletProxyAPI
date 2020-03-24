require('dotenv').config();

module.exports = {
    API_PORT: process.env.API_PORT || 5000,
    ROLE_SECRET: process.env.ROLE_SECRET || 'MdMhUUcpdvk99Efzk9y7fAKh3ReFRF4L',
    WALLET_PASSWORD: process.env.WALLET_PASSWORD || 'Qw46ue567U357k357j6357j67',
    XAYA_CLI_PATH: process.env.XAYA_CLI_PATH || 'C:\\Program Files\\Xaya\\resources\\daemon',
    ISLESOFWAR_GAMESTATE_DB: process.env.ISLESOFWAR_GAMESTATE_DB || 'C:\\islesofwar_gamestate_service\\XayaStateProcessor\\database\\iow\\main\\storage.sqlite'
};