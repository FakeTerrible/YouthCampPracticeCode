import fs from "fs";

const inputConfig = {
  middleeare: {
    router: true,
  },
};

fs.mkdirSync(getRootPath());

fs.writeFileSync(getRootPath()+"/index.js", "index",);

function getRootPath() {
  return "./haha";
}
