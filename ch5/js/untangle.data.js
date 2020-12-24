if (untangleGame === undefined) {
    var untangleGame = {};
}

untangleGame.Circle = function(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

untangleGame.circles = [];

untangleGame.createRandomCircles = function(width, height) {
    // randomly draw 5 circles
    var circlesCount = 5;
    var circleRadius = 10;
    for (var i=0;i<circlesCount;i++) {
        var x = Math.random()*width;
        var y = Math.random()*height;
        untangleGame.circles.push(new untangleGame.Circle(x,y,circleRadius));
        untangleGame.drawCircle(x, y, circleRadius);
    }
};

untangleGame.Line = function(startPoint, endPoint, thickness) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.thickness = thickness;
}
