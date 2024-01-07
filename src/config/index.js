const canvas = document.createElement('canvas');
canvas.id = 'game';
canvas.width = 800;
canvas.height = 450;
document.body.append(canvas);

const ctx = canvas.getContext('2d');

const config = {
  ball: {
    radius: 12,
    coords: {
      x: Math.floor(canvas.width / 2) - 7.5,
      y: Math.floor(canvas.height / 2) - 7.5,
    },
  },
  
  abstractPlayer: {
    width: 10,
    height: 100,
  },

  player1: {
    coords: {
      x: 15,
      y: 15,
    },
    movement: {
      top: false,
      down: false,
    },
  },

  player2: {
    coords: {
      x: canvas.width - 10 - 15,
      y: canvas.height - 100 - 15,
    },
    movement: {
      top: false,
      down: false,
    },
  },

  abstractScore: {
    font: '30px Arial',
  },

  score: {
    score1: {
      coords: {
        x: 150,
        y: canvas.height / 2 + 7
      },
    },
  
    score2: {
      coords: {
        x: canvas.clientWidth - 20 - 150,
        y: canvas.height / 2 + 7
      },
    },
  }
};

export { config, canvas, ctx };