const fs = require("fs");
const path = require("path");
const Router = require("koa-router");
const router = new Router();
const utils = require("./function");

router.post("/upload", async (ctx, next) => {
  const file = ctx.request.files.file; // 上传的文件在ctx.request.files.file
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  //   var myDate = new Date();
  //   var newFilename = myDate.getTime() + "." + file.name.split(".")[1];
  //   var targetPath = path.join(__dirname, "../public/upload/") + `/${newFilename}`;

  // 修改文件的名称
  const ext = utils.getUploadFileExt(file.name);
  const dirName = utils.getUploadDirName();
  const dir = path.join(__dirname, `../public/upload/${dirName}`);
  utils.checkDirExist(dir);
  const fileName = utils.getUploadFileName(ext);
  file.path = `${dir}/${fileName}`;

  //创建可写流
  const upStream = fs.createWriteStream(file.path);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  //返回保存的路径
  return (ctx.body = {
    code: 200,
    data: {
      url: "http://" + ctx.headers.host + "/upload/" + dirName + "/" + fileName
    }
  });
});

module.exports = router;
