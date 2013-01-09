var path = require('path')
var fs = require('fs')

module.exports = function (nputrc_path) {
  var nputrc = nputrc_path 
      || path.resolve(process.env.HOME, './.nputrc')
  var file = fs.readFileSync(nputrc, 'utf8')
  return JSON.parse(file)
}
