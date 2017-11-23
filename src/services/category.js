const knex = require('../db')

const categories = () => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        knex.select().from('category')
          .then((data) => {
            resolve({categories: data})
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    save: (name) => {
      return new Promise((resolve, reject) => {
        knex('category')
          .insert({ name: name })
          .then((data) => {
            resolve({ category: { name } })
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    update: (id, name) => {
      return new Promise((resolve, reject) => {
        knex('category')
          .where({ id: id })
          .update({ name: name })
          .then((data) => {
            resolve({ category: { name, id } })
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        knex('category')
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

module.exports = categories
