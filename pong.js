var cnv = document.getElementById('cnv');
var ctx = cnv.getContext('2d');

var player = {x: 374, y: 590, s: 4};
var ball = {x: 398, y: 298, s: 2, dy: true, dx: true};

var frame = 0;
var time = 0;
var recorde = 0;

function draw() {
    if(frame > 0 && frame % 60 === 0) {
        time++;
        
        if(time % 10 === 0)
            ball.s += 0.5;
            
    }
    
    if(input.down && player.y < 590)
        player.y += player.s;
    
    if(input.up && player.y > 5)
        player.y -= player.s;
    
    if(input.right && player.x < 745)
        player.x += player.s;
    
    if(input.left && player.x > 5)
        player.x -= player.s;
    
    if(ball.x >= 791 && ball.dx === true)
        ball.dx = false;
    else if(ball.x <= 5 && ball.dx === false)
        ball.dx = true;
    
    if(ball.y <= 5 && ball.dy === false)
        ball.dy = true;
    
    if(ball.x >= player.x - 4 && ball.x <= player.x + 54 && ball.y >= player.y - 4 && ball.y <= player.y + player.s - 4){
        ball.dy = false;
    }
    
    if(ball.dx === true)
        ball.x += ball.s;
    else
        ball.x -= ball.s;
    
    if(ball.dy === true)
        ball.y += ball.s;
    else
        ball.y -= ball.s;
    
    if(ball.y >= 600){
        ball = {x: 398, y: 298, s: 2, dy: true, dx: true};
        
        if(time > recorde){
            recorde = time;
            document.getElementById("recorde").innerHTML = recorde;
        }
        
        time = 0;                    
    }
    
    ctx.clearRect(0,0,800,600);
    ctx.save();
    
    ctx.fillRect(0,0,800,600);
    
    ctx.fillStyle = 'white';
    
    ctx.fillRect(player.x,player.y,50,5);
    
    ctx.fillRect(ball.x,ball.y,4,4);
    
    ctx.font = "48px sans-serif";
    
    ctx.fillText(time, 352, 50);
    
    ctx.restore();
    
    frame++;
    
}

setInterval(draw,1000/60);
