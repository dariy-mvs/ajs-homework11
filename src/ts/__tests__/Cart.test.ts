import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Phones from '../domain/Phones';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new movie item', () => {
  const cart = new Cart();
  cart.add(new Movie(1004, 'The Avengers', 30, 'USA', 2012, 'Avengers Assemble!', "2ч17мин", ['fantasy', 'adventure']));
  expect(cart.items[0]).toEqual({
    count: 1,
    increasing: false,
    country: "USA",
    ganre: ["fantasy", "adventure"],
    id: 1004,
    name: "The Avengers",
    price: 30,
    tagline: "Avengers Assemble!",
    time: "2ч17мин",
    year: 2012,
  })
})

test('delete item', () => {
  const cart = new Cart();
  cart.add(new Movie(1004, 'The Avengers', 30, 'USA', 2012, 'Avengers Assemble!', "2ч17мин", ['fantasy', 'adventure']));
  cart.del(1004);
  expect(cart.items).toEqual([])
})

test('count sum without sale', () => {
  const cart = new Cart();
  cart.add(new Movie(1004, 'The Avengers', 30, 'USA', 2012, 'Avengers Assemble!', "2ч17мин", ['fantasy', 'adventure']));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  const totalPrice = cart.sumPrice();
  expect(totalPrice).toEqual(930)
});

test('count sum with sale', () => {
  const cart = new Cart();
  cart.add(new Movie(1004, 'The Avengers', 30, 'USA', 2012, 'Avengers Assemble!', "2ч17мин", ['fantasy', 'adventure']));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, 30));
  const totalPrice = cart.sumDiscountPrice();
  expect(totalPrice).toEqual(660)
})

test('add 2 items', () => {
  const cart = new Cart();
  cart.add(new Movie(1004, 'The Avengers', 30, 'USA', 2012, 'Avengers Assemble!', "2ч17мин", ['fantasy', 'adventure']));
  cart.add(new Movie(1004, 'The Avengers', 30, 'USA', 2012, 'Avengers Assemble!', "2ч17мин", ['fantasy', 'adventure']));
  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual({
    count: 1,
    increasing: false,
    country: "USA",
    ganre: ["fantasy", "adventure"],
    id: 1004,
    name: "The Avengers",
    price: 30,
    tagline: "Avengers Assemble!",
    time: "2ч17мин",
    year: 2012,
  })
})

test('add 2 items', () => {
  const cart = new Cart();
  cart.add(new Phones(1066, 'Xiaomi', 11999, 'China', 2020, 'Redmi Node 9'));
  cart.add(new Phones(1066, 'Xiaomi', 11999, 'China', 2020, 'Redmi Node 9'));
  console.log(cart.items);
  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual({
    count: 2,
    increasing: true,
    country: 'China',
    id: 1066,
    name: "Xiaomi",
    price: 11999,
    model: 'Redmi Node 9',
    year: 2020,
  })
})

test('decrement Items', () => {
  const cart = new Cart();
  cart.add(new Phones(1066, 'Xiaomi', 11999, 'China', 2020, 'Redmi Node 9'));
  cart.add(new Phones(1066, 'Xiaomi', 11999, 'China', 2020, 'Redmi Node 9'));
  cart.decrementCount(1066);
  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual({
    count: 1,
    increasing: true,
    country: 'China',
    id: 1066,
    name: "Xiaomi",
    price: 11999,
    model: 'Redmi Node 9',
    year: 2020,
  })
})


