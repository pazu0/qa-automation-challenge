const request = require('supertest')
const { email, password, apiLoginUrl, apiCreateDeleteUrl, apiGetUrl } = require('./config')

const login = async () => {
  const res = await request(apiLoginUrl)
    .post('/')
    .send({ email, password })

  return res.body.authentication.token
}

const getOrders = async () => {
  const token = await login()
  const res = await request(apiGetUrl)
    .get('/')
    .auth(token, { type: 'bearer' })

  return res.body.data
}

const createOrders = async (ProductId) => {
  const token = await login()
  await request(apiCreateDeleteUrl)
    .post('/')
    .auth(token, { type: 'bearer' })
    .send({ ProductId, BasketId: "11", quantity: 1 })
}

const deleteOrders = async (orderId) => {
  const token = await login()
  await request(`${apiCreateDeleteUrl}/${orderId}`)
    .delete('/')
    .auth(token, { type: 'bearer' })
}

const deleteAllOrders = async () => {
  const allOrders = await getOrders()
  if (allOrders.Products.length) {
    allOrders.Products.forEach(async (product) => {
      await deleteOrders(product.BasketItem.id)
    })
  }
}

module.exports = { getOrders, createOrders, deleteOrders, deleteAllOrders }