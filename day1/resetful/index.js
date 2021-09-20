const Koa = require('koa')
const app = new Koa()

const config = require('./conf')
const {loadModel} = require('./framework/loader') 

loadModel(config)(app)

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const resetful = require('./framework/router')
app.use(resetful)

app.listen(3000, () => {
    console.log('Server at 3000')
})