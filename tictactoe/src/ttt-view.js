class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    //add click event 
    $(this.$el).on("click", ".square", e => {
      let pos = $(e.currentTarget).data("pos");
      //  console.log(pos); 
       try{
         this.game.playMove(pos);
         this.makeMove($(e.currentTarget));
         if (this.game.isOver()) {
           let $h2 = $("<h2>")
           $h2.addClass('winner')
           $h2.append(`${this.game.currentPlayer} has won!`);
           this.$el.append($h2);
          //  console.log(this.game.board.winner());
          $('.square').css('background-color', 'white');
          $(`.${this.game.currentPlayer}`).css('background-color', 'green');
         }
         
       }catch(err) {
         alert(err.message);
       }
      });
  }

  makeMove($square) {
    console.log(`Square object: ${$square}`);
    let shape = this.game.currentPlayer;
    $square.addClass(`${shape}`);
    $square.addClass("square-move");


  }

 
  setupBoard() {
    // console.log(this.$el)
    let $ul = $("<ul>");
    $ul.addClass('grid');
    for (let i = 0; i < 9; i++) {
      let $li = $("<li>");
      $li.addClass('square');
      $li.data("pos", [i % 3, Math.floor(i / 3)]);
      $ul.append($li);
    }

    this.$el.append($ul);
  }
}

module.exports = View;
