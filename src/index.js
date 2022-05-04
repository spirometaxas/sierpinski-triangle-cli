const getWidth = function(n) {
  return Math.pow(2, n) - 1;
}

const getHeight = function(n) {
  if (n === 0) {
    return 0;
  }
  return Math.pow(2, n - 1);
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

const drawTriangle = function(board, pos, scale) {
  var curW = getWidth(scale);
  var startX = pos.x - parseInt(getWidth(scale) / 2.0);
  var curY = pos.y;
  for (let i = 0; i < getHeight(scale); i++) {
    for (let j = 0; j < curW; j++) {
      if (j % 2 === 0) {
        board[curY][startX + j] = '▲';
      } else {
        board[curY][startX + j] = '▼';
      }
    }
    curW -= 2;
    startX += 1;
    curY += 1;
  }
}

const sierpinski = function(n, scale, board, pos) {
  if (n === 1) {
    drawTriangle(board, pos, scale);
    return;
  }
  sierpinski(n - 1, scale - 1, board, { x: pos.x - getWidth(scale - 2) - 1, y: pos.y });
  sierpinski(n - 1, scale - 1, board, { x: pos.x + getWidth(scale - 2) + 1, y: pos.y });
  sierpinski(n - 1, scale - 1, board, { x: pos.x, y: pos.y + getHeight(scale - 1) });
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

const create = function(n, scale) {
  if (!n || n < 1) {
    return '';
  }
  if (!scale || scale < n) {
    scale = n;
  }
  const board = createBoard(getWidth(scale), getHeight(scale));
  sierpinski(n, scale, board, { x: parseInt(getWidth(scale) / 2.0), y: 0 });
  return draw(board);
}

module.exports = {
  create: create
};