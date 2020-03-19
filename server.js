const Express = require('express');
const bodyParser = require('body-parser');
const auth = require('simple-service-auth');
const config = require('./config');

const app = new Express();
app.use(bodyParser.json());

const users = [{
    key: 'UVz3uEfVaEMhq4hQAZnhuh7HDaQbUj3R7t6PUsyRH6pvD8Fp2mLAfq9drLuxhcm49KGKWkGNb9wTx6HaDKrbtr6C9xPPVfBxjTf6r2wuzvsMXCWhyamE9Knh4BwCVyHE',
    role: 'Admin'
}];

auth.setup({ secret: config.ROLE_SECRET, users });
auth.http.route(app);

require('./routes/wallet/airdrop')(app);

app.listen(config.API_PORT, () => {
    console.log(`API listening on port ${config.API_PORT}`);
});