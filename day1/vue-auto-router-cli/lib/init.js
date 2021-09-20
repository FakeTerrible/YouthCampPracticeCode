// 打印欢迎界面
const {promisify} = require('util')
const figlet = promisify(require('figlet'))

const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const {clone} = require('./download')

module.exports = async name => {
    clear()
    const data = await figlet('KKB Welcome')
    log(data)

    // 项目模板
    log('创建项目：'+name)
    await clone('https://github.com/su37josephxia/vue-template.git',name);

}