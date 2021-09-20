const {promisify} = require('util');
// import ora from "ora";

module.exports.clone = async function(repo, desc){
    const download = promisify(require('download-git-repo'));
    const ora = require('ora')
    const process = ora(`下载...${repo}`)

    // 改变颜色
    process.color = 'yellow'
    process.start("Loading...")
    
    await download(repo,desc);
    process.succeed('sucess')
}