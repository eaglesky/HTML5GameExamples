if (untangleGame === undefined) {
    var untangleGame = {};
}

$(function(){
    var canvas = document.getElementById("game");
    untangleGame.ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    untangleGame.createRandomCircles(width, height);
    untangleGame.connectCircles();

    // set up an interval to loop the game loop
    setInterval(gameloop, 30);

    function gameloop() {
        // clear the Canvas before re-drawing.
        untangleGame.clear();
        untangleGame.drawAllLines();
        untangleGame.drawAllCircles();
    }

    untangleGame.handleInput();
});