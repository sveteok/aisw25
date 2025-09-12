/*
Let's examine a previous assignment and make it better with functions.

Namely, 4 - Data types - Assignment 4

Create functions DamageTree() and DamageRock() that take in one argument, the amount of damage.
Generalize further: Create a function Damage() that takes in two arguments: the hit target, and the amount of damage.

*/

const tree = { x: 6, y: 7, hitpoints: 30 };
const rock = { x: 3, y: 11, hitpoints: 90 };
const damage = 15;

const damageRock = (damage) => {
  let rockHitpointsLeft;
  const hitpoints = rock.hitpoints;
  rockHitpointsLeft = hitpoints - damage;

  console.log("Rock hitpoints left: " + rockHitpointsLeft);
};

const damageTree = (damage) => {
  let treeHitpointsLeft;
  const hitpoints = tree.hitpoints;
  treeHitpointsLeft = hitpoints - damage;

  console.log("Tree hitpoints left: " + treeHitpointsLeft);
};

const Damage = (hitTarget, damage) => {
  let hitpointsLeft;
  const hitpoints = hitTarget.hitpoints;
  hitpointsLeft = hitpoints - damage;

  console.log("Hitpoints left: " + hitpointsLeft);
};
