const router = require('../factories/factoryRouter')
const router1 = require('../factories/factoryRouter')
const tokenRouter = require('../factories/factoryRouter')
const express = require('express')
const app = express()
const port = process.env.port || 3000
const session = require('../factories/factorySession')

app.use(session({
    secret: 'boh',
    resave: false,
    saveUninitialized: true
}))

app.use(router)
router.use('/token', router1)
router1.use('/getToken', tokenRouter)

const TokenRouter = require('../controllers/tokenRouter')
const tc = new TokenRouter(tokenRouter)

app.listen(port, () => {
    console.log('Listen on port ' + port);
})