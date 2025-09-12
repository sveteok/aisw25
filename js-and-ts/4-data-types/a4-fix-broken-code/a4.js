/*
Your friend got inspired to create a gardening game where the player controls a character and must destroy unwanted trees and rocks from the garden.

However, when the player strikes the trees and rocks in the game's prototype version, there's something off in the applied damage.

Check your friend's code, figure out what's wrong and fix the code so it works properly.
*/

const tree = { x: 6, y: 7, hitpoints: 30 };
const rock = { x: 3, y: 11, hitpoints: 90 };
const damage = 15;

{
  let rockHitpointsLeft;
  const hitpoints = rock.hitpoints;
  rockHitpointsLeft = hitpoints - damage;

  console.log("Rock hitpoints left: " + rockHitpointsLeft);
}

{
  let treeHitpointsLeft;
  const hitpoints = tree.hitpoints;
  treeHitpointsLeft = hitpoints - damage;

  console.log("Tree hitpoints left: " + treeHitpointsLeft);
}
