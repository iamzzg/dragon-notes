const path = require("path");
const fs = require("fs");

/**
 * 返回以某个目录的sidebar配置
 * @param {*} folderPath 文件夹路径 C:\\xx\前端笔记
 * @param {*} parentPath 父级目录,用于拼接
 * @returns [['/前端笔记/filename','filename']]
 */
const getSidebarArray = (folderPath, parentPath = "") => {
  const sidebarArr = [];

  // 读取文件夹下的文件名称,files:string[]
  const files = fs.readdirSync(folderPath);

  files.map(filepath => {
    const _parentPath = parentPath + "/" + folderPath.split("\\").pop();

    const stat = fs.statSync(path.resolve(folderPath, filepath));
    if (stat.isFile()) {
      // 是文件
      const filename = filepath.replace(/\..*/, "");
      sidebarArr.push([`${_parentPath}/${filename}`, filename]);
    } else if (stat.isDirectory()) {
      let linkObj = {
        title: filepath,
        children: getSidebarArray(
          path.resolve(folderPath, filepath),
          _parentPath
        )
      };
      sidebarArr.push(linkObj);
    }
  });

  return sidebarArr;
};

module.exports = { getSidebarArray };
