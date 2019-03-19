const path = require("path");
const fs = require("fs");

// 时间戳
function getUploadFileName(ext) {
  return `${Date.now()}${Number.parseInt(Math.random() * 10000)}.${ext}`;
}
// 返回日期
function getUploadDirName() {
  const date = new Date();
  let month = Number.parseInt(date.getMonth()) + 1;
  month = month.toString().length > 1 ? month : `0${month}`;
  const dir = `${date.getFullYear()}${month}${date.getDate()}`;
  return dir;
}
// 查找文件后缀
function getUploadFileExt(name) {
  let ext = name.split(".");
  return ext[ext.length - 1];
}
// 检查文件夹是否存在
function checkDirExist(p) {
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p);
  }
}

module.exports = {
  getUploadFileName,
  getUploadDirName,
  getUploadFileExt,
  checkDirExist
};
