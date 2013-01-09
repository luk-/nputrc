var nputrc = require('../')
var assert = require('assert')

var fixture = nputrc(__dirname + '/nputrc.json')
var out = {
  "nput_dir": "~/.nput",
  "user": "root",
  "key": "~/.ssh/id_dsa"
}

assert.deepEqual(out, fixture)
