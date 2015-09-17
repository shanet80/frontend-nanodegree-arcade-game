/*
Shane Thompson
9/3/2015
*/

// Enemies our player must avoid
"use strict";
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -20;
    this.y = y;
    this.speed = Math.floor((Math.random() * 400) + 200);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if(this.x >= 606) {
      this.x = -100;
      this.speed = Math.floor(Math.random() * 500);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = "images/char-boy.png";
  this.x = 202,
  this.y = 383;
  this.speedX = 101;
  this.speedY = 83;
};

Player.prototype.render = function(x, y) {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {
  if (this. y <= 0){
    this.reset();
  }
};

Player.prototype.handleInput = function (direction) {
    if (direction === 'left' && this.x > 100) {
        this.x -= this.speedX;
    }
    if (direction === 'up' && this.y > 50) {
        this.y -= this.speedY;
    }
    if (direction === 'right' && this.x < 304) {
        this.x += this.speedX;
    }
    if (direction === 'down' && this.y < 301) {
        this.y += this.speedY;
    }
};

Player.prototype.reset = function() {
  this.x = 202;
  this.y = 383;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(63), new Enemy(145), new Enemy(229)];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
