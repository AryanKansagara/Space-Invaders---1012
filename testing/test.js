const assert = require('assert');

// Mock DOM elements and global variables
const startScreen = { style: { display: 'none' } };
const gameOverScreen = { style: { display: 'none' } };
const canvas = { style: { display: '' } };
const scoreContainer = { style: { display: '' } };
const pauseContainer = { style: { display: '' } };
let gameStarted = false;
let isGameOver = true;
let resizeCalled = false;
let updateScoreCalled = false;
let updateHighScoreCalled = false;
let createEnemiesCalled = false;
let gameLoopCalled = false;

// Mock functions
function Player() {}

function resize() { resizeCalled = true; }
function updateScore() { updateScoreCalled = true; }
function updateHighScore() { updateHighScoreCalled = true; }
function createEnemies() { createEnemiesCalled = true; }
function gameLoop() { gameLoopCalled = true; }

// Import the startGame function from the space_invaders.js file
const startGame = require('..public/').startGame;

describe('startGame', function() {
  beforeEach(function() {
    // Reset mock variables before each test
    gameStarted = false;
    isGameOver = true;
    resizeCalled = false;
    updateScoreCalled = false;
    updateHighScoreCalled = false;
    createEnemiesCalled = false;
    gameLoopCalled = false;
  });

  it('should start the game if it has not been started yet', function() {
    startGame();

    assert.strictEqual(gameStarted, true);
    assert.deepStrictEqual(startScreen.style.display, 'none');
    assert.deepStrictEqual(gameOverScreen.style.display, 'none');
    assert.deepStrictEqual(canvas.style.display, 'block');
    assert.deepStrictEqual(scoreContainer.style.display, 'inline');
    assert.deepStrictEqual(pauseContainer.style.display, 'flex');
    assert.strictEqual(isGameOver, false);
    assert.notStrictEqual(new Player(), null);
    assert.deepStrictEqual([], []);
    assert.strictEqual(updateScoreCalled, true);
    assert.strictEqual(updateHighScoreCalled, true);
    assert.strictEqual(createEnemiesCalled, true);
    assert.strictEqual(gameLoopCalled, true);
  });

  it('should not start the game if it has already been started', function() {
    gameStarted = true;

    startGame();

    assert.deepStrictEqual(startScreen.style.display, '');
    assert.deepStrictEqual(gameOverScreen.style.display, '');
    assert.deepStrictEqual(canvas.style.display, '');
    assert.deepStrictEqual(scoreContainer.style.display, '');
    assert.deepStrictEqual(pauseContainer.style.display, '');
    assert.strictEqual(isGameOver, true);
    assert.strictEqual(resizeCalled, false);
    assert.strictEqual(updateScoreCalled, false);
    assert.strictEqual(updateHighScoreCalled, false);
    assert.strictEqual(createEnemiesCalled, false);
    assert.strictEqual(gameLoopCalled, false);
  });
});
