const { getOrders, createOrders, deleteOrders, deleteAllOrders } = require('./helpers')

describe('Integration - Orders', () => {
  beforeEach(async () => {
    await deleteAllOrders()
  })

  it('should add one item to the basket', async () => {
    await createOrders(1)
    const orders = await getOrders()
    expect(orders.Products.length).toBe(1)
  })

  it('should add two items to the basket', async () => {
    await createOrders(2)
    await createOrders(3)
    const orders = await getOrders()
    expect(orders.Products.length).toBe(2)
  })

  it('should delete one item from the basket', async () => {
    await createOrders(4)
    await createOrders(5)
    const orders = await getOrders()
    expect(orders.Products.length).toBe(2)

    await deleteOrders(orders.Products[0].BasketItem.id)
    const ordersAfterDeletion = await getOrders()
    expect(ordersAfterDeletion.Products.length).toBe(1)
  })
})
