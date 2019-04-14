# CantDecide
Web app that chooses for you

Small web app built using [Three.js](https://threejs.org/)
 to simulate a dice roll.

## What it does:
Based on user input, CantDecide will generate a 3 dimensional dice with each side containing words typed in from the user.
Then, a random dice roll will be simulated and the user will be presented with one of the options.

## Constaints:
* Because of the physical limitations of a dice, the cube will hold a maximum of 6 options.
* When entering options, each one of them has to be separated by a space.
* Longer options will look distorted as the cube is rendered at a fixed size.
* If less than 6 options are entered, the word "Nada?" (meaning "nothing" in spanish) will be printed on the remaining sides instead.
