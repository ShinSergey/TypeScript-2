import Cart from '../service/Cart';

test('new card should be empty', () => {
    const cart = newCart();
    expect(cart.items.length).toBe(0);
});