# battleship

To-do

Create ship factory function (5 ships per player x2)
-Objects that include length, where they've been hit, whether or not they've been sunk
-Test object's public interface
-Should have a hit() function that takes a number and then marks that position as 'hit'
-isSunk() function calculates based on the length and whether all their positions are hit. Probably call that in hit()

Create a gameboard factory (1 per each player, 2 players)
-run tests
-able to place ships at specific coordinates (and orientation?) by calling the ship factory function
-have a receiveAttack() function that takes in pair of coordinates, determines whether or not the attack hit a ship, then sends the hit() function to the correct ship, or records the coordinates of the missed shot
-Can report whether or not all of their ships have been sunk

Create a Player
-can take turns playing the game by attacking the enemy gameboard
-game is played against computer (random but not illegal)

Create main game loop + module for DOM interaction
-being crafting UI
-set up new game by creating players and gameboards. populate for now with predetermined coordinates
-HTML: display both player's boards and render them using info from Gameboard
    -Click on coordinate for input
-game loop should step through game using methods of other objects
    -no new functions in game loop
-Game ends once one player loses all ships. This can go in game module

Wrap up
-choose ship locations (input coordinates?)
-Polish computer player intelligence slightly
-2 player option with hiding info to pass back and forth on same screen



Files (5x2)
-ship factory function (plus tests)
-gameboard factory (plus tests)
-player factory (plus tests)
-DOM module (plus tests(?))
-main game loop (module plus tests(?))
