/*
Get practice with using Reduce by doing the following exercises:

https://coursework.vschool.io/array-reduce-exercises/
*/

// 4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
interface WishlistItem {
  title: string;
  price: number;
}
const wishlist: WishlistItem[] = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const shoppingSpree = (arr: WishlistItem[]) => {
  return arr.reduce((acc: number, curr: WishlistItem) => acc + curr.price, 0);
};
console.log(shoppingSpree(wishlist)); // 227005
