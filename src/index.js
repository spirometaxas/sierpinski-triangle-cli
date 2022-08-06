const getWidth = function(n) {
  return Math.pow(2, n + 1) - 1;
}

const getHeight = function(n) {
  if (n < 0) {
    return 0;
  }
  return Math.pow(2, n);
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const drawTriangle = function(board, pos, scale, character) {
  var curW = getWidth(scale);
  var startX = pos.x - parseInt(getWidth(scale) / 2.0);
  var curY = pos.y;
  for (let i = 0; i < getHeight(scale); i++) {
    for (let j = 0; j < curW; j++) {
      if (character) {
        board[curY][startX + j] = character;
      } else {
        if (j % 2 === 0) {
          board[curY][startX + j] = '▲';
        } else {
          board[curY][startX + j] = '▼';
        }
      }
    }
    curW -= 2;
    startX += 1;
    curY += 1;
  }
}

const drawInverseTriangle = function(board, pos, scale, character) {
  var curW = 1;
  var startX = pos.x;
  var curY = pos.y;
  for (let i = 0; i < getHeight(scale); i++) {
    for (let j = 0; j < curW; j++) {
      if (character) {
        board[curY][startX + j] = character;
      } else {
        if (j % 2 === 0) {
          board[curY][startX + j] = '▼';
        } else {
          board[curY][startX + j] = '▲';
        }
      }
    }
    curW += 2;
    startX -= 1;
    curY += 1;
  }
}

const sierpinski = function(n, scale, board, pos, inverse=false, character) {
  if (n === 0) {
    if (!inverse) {
      drawTriangle(board, pos, scale, character);
    }
    return;
  } else if (n > 0 && inverse) {
    drawInverseTriangle(board, pos, scale - 1, character);
  }

  sierpinski(n - 1, scale - 1, board, { x: pos.x - getWidth(scale - 2) - 1, y: pos.y }, inverse, character);
  sierpinski(n - 1, scale - 1, board, { x: pos.x + getWidth(scale - 2) + 1, y: pos.y }, inverse, character);
  sierpinski(n - 1, scale - 1, board, { x: pos.x, y: pos.y + getHeight(scale - 1) }, inverse, character);
}

const draw = function(board) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[board.length - i - 1][j];
    }
    result += '\n ';
  }
  return result;
}

const create = function(n, config) {
  if (n === undefined || n < 0) {
    return '';
  }

  let scale = n;
  if (config && config.scale && config.scale > n) {
    scale = config.scale;
  }

  const inverse = config !== undefined && config.inverse === true;
  const character = config !== undefined && config.character !== undefined && config.character.length === 1 ? config.character : undefined;

  const board = createBoard(getWidth(scale), getHeight(scale));
  sierpinski(n, scale, board, { x: parseInt(getWidth(scale) / 2.0), y: 0 }, inverse, character);
  return draw(board);
}

module.exports = {
  create: create
};