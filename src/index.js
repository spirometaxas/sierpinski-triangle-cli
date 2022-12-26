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

const isValidRotation = function(rotation) {
  return rotation !== undefined && (rotation.toLowerCase() === 'flip' || rotation.toLowerCase() === 'standard');
}

const drawTriangle = function(board, pos, size, character) {
  var curW = getWidth(size);
  var startX = pos.x - parseInt(getWidth(size) / 2.0);
  var curY = pos.y;
  for (let i = 0; i < getHeight(size); i++) {
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

const drawInverseTriangle = function(board, pos, size, character) {
  var curW = 1;
  var startX = pos.x;
  var curY = pos.y;
  for (let i = 0; i < getHeight(size); i++) {
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

const sierpinski = function(n, size, board, pos, inverse=false, character) {
  if (n === 0) {
    if (!inverse) {
      drawTriangle(board, pos, size, character);
    }
    return;
  } else if (n > 0 && inverse) {
    drawInverseTriangle(board, pos, size - 1, character);
  }

  sierpinski(n - 1, size - 1, board, { x: pos.x - getWidth(size - 2) - 1, y: pos.y }, inverse, character);
  sierpinski(n - 1, size - 1, board, { x: pos.x + getWidth(size - 2) + 1, y: pos.y }, inverse, character);
  sierpinski(n - 1, size - 1, board, { x: pos.x, y: pos.y + getHeight(size - 1) }, inverse, character);
}

const sierpinskiFlip = function(n, size, board, pos, inverse=false, character) {
  if (n === 0) {
    if (!inverse) {
      drawInverseTriangle(board, { x: pos.x, y: pos.y - getHeight(size) + 1 }, size, character);
    }
    return;
  } else if (n > 0 && inverse) {
    drawTriangle(board, { x: pos.x, y: pos.y - getHeight(size - 1) + 1 }, size - 1, character);
  }

  sierpinskiFlip(n - 1, size - 1, board, { x: pos.x - getWidth(size - 2) - 1, y: pos.y }, inverse, character);
  sierpinskiFlip(n - 1, size - 1, board, { x: pos.x + getWidth(size - 2) + 1, y: pos.y }, inverse, character);
  sierpinskiFlip(n - 1, size - 1, board, { x: pos.x, y: pos.y - getHeight(size - 1) }, inverse, character);
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

  let size = n;
  if (config && config.size && config.size > n) {
    size = config.size;
  }

  const inverse = config !== undefined && config.inverse === true;
  const rotate = config !== undefined && isValidRotation(config.rotate) ? config.rotate.toLowerCase() : 'standard';
  const character = config !== undefined && config.character !== undefined && config.character.length === 1 ? config.character : undefined;

  const board = createBoard(getWidth(size), getHeight(size));
  if (rotate.toLowerCase() === 'flip') {
    sierpinskiFlip(n, size, board, { x: parseInt(getWidth(size) / 2.0), y: getHeight(size) - 1 }, inverse, character);
  } else {
    sierpinski(n, size, board, { x: parseInt(getWidth(size) / 2.0), y: 0 }, inverse, character);
  }
  
  return draw(board);
}

module.exports = {
  create: create
};