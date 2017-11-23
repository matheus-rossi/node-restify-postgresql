const knex = require('../db')
const sha1 = require('sha1')
const jwt = require('jsonwebtoken')

const auth = () => {
  return {
    authenticate: (email, password) => {
      return new Promise((resolve, reject) => {
        knex('users').where({
          email: email,
          password: sha1(password)
        }).select('id', 'email')
          .then((data) => {
            if (data.length) {
              const { email, id } = data[0]
              const token = jwt.sign({ email, id }, 'arroz', { expiresIn: 60 * 60 * 24 })
              resolve({ token })
            } else {
              resolve('Usuário não encontrado')
            }
          })
          .catch((error) => {
            console.log(error)
          })
      })
    }
  }
}

module.exports = auth
