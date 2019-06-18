const View = require('./ttt-view');// require appropriate file
const Game = require('./game');// require appropriate file

  $( () => { //only executes when loaded
    console.log($('.ttt'));
    const game = new Game();
    
    const view = new View(game, $('.ttt'));
  });
