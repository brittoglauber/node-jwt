const blacklist = require('./blacklist')

const { promisify } = require('util')
const existsAsync = promisify(blacklist.exists).bind(blacklist)

module.exports = {
  adiciona: token => {
    blacklist.set(token, '')
  },
  contemToken: token => {
    blacklist.exists(token)
  }
}
