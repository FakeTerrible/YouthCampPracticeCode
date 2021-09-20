const {promisify} = require('util');
// import ora from "ora";

module.exports.clone = async function(repo, desc){
    const download = promisify(require('download-git-repo'));
    const ora = require('ora')
    const process = ora(`下载...${repo}`)
    process.start('start')
    await download(repo,desc);
    process.succeed('sucess')
}