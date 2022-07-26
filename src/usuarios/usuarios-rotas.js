const usuariosControlador = require('./usuarios-controlador')
const middlewaresAuthenticacao = require('./middelwares-authenticacao')
const passport = require('passport')

module.exports = app => {
  app
    .route('/usuario/login')
    .post(middlewaresAuthenticacao.local, usuariosControlador.login)

  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista)

  app
    .route('/usuario/:id')
    .delete(middlewaresAuthenticacao.bearer, usuariosControlador.deleta)
}
