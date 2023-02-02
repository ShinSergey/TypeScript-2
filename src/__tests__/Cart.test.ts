import Cart from '../ts/service/Cart';
import Book from '../ts/domain/Book';
import MusicAlbum from '../ts/domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new card should be filled', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.items.length).toBe(2);
});

test('new card should get', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.items).toEqual([{
    id: 1001,
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    price: 2000,
    pages: 1225,
  }, {
    id: 1008,
    name: 'Meteora',
    author: 'Linkin Park',
    price: 900,
  }]);
});

test('new card should show total without discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.total()).toEqual(2900);
});

test('new card should show total with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.totalWithD(20)).toEqual(2320);
});

test('new card should delete', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.remove(1001);

  expect(cart.items.length).toBe(1);
});
