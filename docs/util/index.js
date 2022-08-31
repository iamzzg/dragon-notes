const path = require("path");
const fs = require("fs");

const getSidebarArray = (folderPath) => {
  const sidebarArr = [];

  // 读取文件夹下的文件名称,files:string[]
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return console.log(err);
    }

    const noteDirName = folderPath.split("\\").pop();

    if (files.length > 0) {
      files.map((filepath) => {
        const stat = fs.statSync(path.resolve(folderPath, filepath));
        if (stat.isFile()) {
          // 是文件
          const filename = filepath.replace(/\..*/, "");
          sidebarArr.push([`/${noteDirName}/${filename}`, filename]);
        }
      });
    }
  });
};

module.exports = { getSidebarArray };
