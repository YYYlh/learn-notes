const fs = require('fs')
var express = require('express');
var router = express.Router();
const multiparty = require('multiparty')
const { assetsPath } = require('../global');
router.get('/', function (req, res, next) {
  res.send('hello')
});

function multipartyParse(req) {
  return new Promise((resolve, reject) => {
    let form = new multiparty.Form()
    form.parse(req, (err, fields, files) => {
      resolve({ fields, files })
    })
  })
}

router.post('/upload', async (req, res, next) => {
  let { fields, files } = await multipartyParse(req)
  let [chunk] = files.chunk
  let [filename] = fields.filename
  let hash = /([0-9a-zA-Z]+)/.exec(filename)[0]
  let path = `${assetsPath}/${hash}`
  !fs.existsSync(path) && fs.mkdirSync(path)
  path = `${path}/${filename}`
  fs.access(path, async err => {
    if (!err) {
      res.send({
        success: true,
        path: path.replace(assetsPath, `http://localhost:8848`)
      })
      return
    }
    let readStream = fs.createReadStream(chunk.path)
    let writeStream = fs.createWriteStream(path)
    readStream.pipe(writeStream)
    readStream.on('end', () => {
      fs.unlinkSync(chunk.path)
      res.send({
        success: true,
        path: path.replace(assetsPath, `http://localhost:8848`)
      })
    })

  })
})

router.get('/merge', (req, res, next) => {
  const hash = req.query.hash
  let suffix = ''
  // 查找文件夹下的切片文件
  let path = `${assetsPath}/${hash}`
  const filsList = fs.readdirSync(path)
  // 从小到大排序
  filsList.sort((a, b) => {
    let reg = /_(\d+)/
    return reg.exec(a)[1] - reg.exec(b)[1]
  }).forEach(item => {
    suffix = /\.([0-9a-zA-Z]+)$/i.exec(item)[1]
    fs.appendFileSync(`${assetsPath}/${hash}.${suffix}`, fs.readFileSync(`${path}/${item}`))
    fs.unlinkSync(`${path}/${item}`)
  })
  fs.rmdirSync(path)
  res.send({
    success: true,
    path: `http://localhost:8848/${hash}.${suffix}`
  })
})

module.exports = router;
