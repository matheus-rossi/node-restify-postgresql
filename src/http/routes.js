const db = require('../services')

const routes = (server) => {
  server.post('authenticate', async (req, res, next) => {
    try {
      const { email, password } = req.params
      res.send(await db.auth().authenticate(email, password))
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.get('category', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.post('category', async (req, res, next) => {
    try {
      const { name } = req.params
      res.send(await db.categories().save(name))
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.put('category', async (req, res, next) => {
    try {
      const { name, id } = req.params
      res.send(await db.categories().update(id, name))
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.del('category', async (req, res, next) => {
    try {
      const { id } = req.params
      res.send(await db.categories().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })
  server.get('/', (req, res, next) => {
    res.send('Hello Darkness My Old Friend')
    next()
  })
}

module.exports = routes
