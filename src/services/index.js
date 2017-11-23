const catModule = require('../services/category')
const usersModule = require('../services/users')
const authModule = require('../services/auth')

module.exports = {
  categories: () => catModule(),
  users: () => usersModule(),
  auth: () => authModule()
}
