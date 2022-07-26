const postsControlador = require('./posts-controlador')
const { middelwaresAuthenticacao } = require('../usuarios')
const passport = require('passport')

module.exports = app => {
  app
    .route('/post')
    .get(postsControlador.lista)
    .post(middelwaresAuthenticacao.bearer, postsControlador.adiciona)
}
