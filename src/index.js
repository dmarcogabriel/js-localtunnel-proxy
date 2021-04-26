require('dotenv').config()
const bootstrap = require('./bootstrap')

const {PORT_1, SUB_DOMAIN_1, PORT_2, SUB_DOMAIN_2} = process.env

bootstrap(PORT_1, SUB_DOMAIN_1)
bootstrap(PORT_2, SUB_DOMAIN_2)
