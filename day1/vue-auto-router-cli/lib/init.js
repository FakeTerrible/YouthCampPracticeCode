// 打印欢迎界面
const {promisify} = require('util')
const figlet = promisify(require('figlet'))

const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))

module.exports = async name => {
    clear()
    const data = await figlet('KKB Welcome')
    log(data)
}