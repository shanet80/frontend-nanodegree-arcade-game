/*
Shane Thompson
9/3/2015
*/

// Enemies our player must avoid
"use strict";
var Enemy = function(y) {
  this.x = -20;
  this.y = y;
  this.speed = Math.floor((Math.random() * 400) + 300);
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt;
  if(this.x >= 606) {
    this.x = -100;
    this.speed = Math.floor(Math.random() * 500 + (100 + score));
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player class
var Player = function() {
  this.sprite = "images/char-boy.png";
  this.x = 202,
  this.y = 383;
  this.speedX = 101;
  this.speedY = 83;
  this.lives = 5;
};

//Draws player sprite
Player.prototype.render = function(x, y) {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Increases player score and calls reset
Player.prototype.update = function() {
  if (this. y <= 0){
    this.reset();
    score += 10;
    if (score > highScore) {
      highScore = score;
    }
  }
};

// Reduces player lives when hit by an enemy
Player.prototype.hit = function () {
  this.lives -= 1;
  this.reset();
};

// Handles inputs to move player
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

// Resets players position to starting point
Player.prototype.reset = function() {
  this.x = 202;
  this.y = 383;
};

// Resets player to 5 lives and resets position
Player.prototype.respawn = function() {
  this.lives = 5;
  this.reset();
}

// Instantiate Objects
var allEnemies = [new Enemy(63), new Enemy(145), new Enemy(229)];
var player = new Player();
var score = 0;
var highScore = 0;

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
