const knex = require('../db')
const sha1 = require('sha1')

const users = () => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        knex.select('id', 'email').from('users')
          .then((data) => {
            resolve({ user: data })
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    save: (email, password) => {
      return new Promise((resolve, reject) => {
        knex('users')
          .insert({ email: email, password: sha1(password) })
          .then((data) => {
            resolve({ user: email })
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    update: (id, password) => {
      return new Promise((resolve, reject) => {
        knex('users')
          .where({ id: id })
          .update({ password: sha1(password) })
          .then((data) => {
            resolve({ user: { id } })
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        knex('users')
          .where({ id: id })
          .del()
          .then((data) => {
            resolve(`Item ${id} deleted`)
          })
          .catch((error) => {
            console.log(error)
          })
      })
    }
  }
}

module.exports = users
