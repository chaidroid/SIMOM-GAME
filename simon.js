var buttoncolors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var gameon=false;
var level=0;


function nextsequence(){
    level++;
    $("h1").text("Level-"+level);
    

 var randomNumber=Math.floor(Math.random()*4);
 var randomChosenColour=buttoncolors[randomNumber];
 gamePattern.push(randomChosenColour);
 $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
 playsound(randomChosenColour);
}


$(".btn").click(function(){
    if(gameon===false)
    {
        return;
    }
    var userChosenColour=$(this).attr("id");
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatepress(userChosenColour);
    checkAnswer(userChosenColour);
});


function playsound(color){
    var audio=new Audio("C:/Users/Chaitanya/Desktop/web dev/webdevelpoment/SIMON GAME/sounds/"+color+".mp3");
    audio.play();
}

function animatepress(currColor){
    $("."+currColor).addClass("pressed");

    setTimeout(function() {
        $("."+currColor).removeClass("pressed");
    }, 100);
}


$(document).keypress(function(){
    if(gameon===false)
    {
        gameon=true;
        $("h1").text("level"+level);
        nextsequence();
    }
    }
);

function checkAnswer(color)
{
    //alert(color);
    //userClickedPattern.push(color);
    //alert(gamePattern);
    if(userClickedPattern[userClickedPattern.length-1]===gamePattern[userClickedPattern.length-1])
    {
        if(userClickedPattern.length===gamePattern.length)
    {
        userClickedPattern=[];
        setTimeout(function(){
            nextsequence();
        },500);
        
    }
    return;
    }
  
    $("body").addClass("game-over");
    setTimeout(function(){
    $("body").removeClass("game-over");
    },400);
    userClickedPattern=[];
    gamePattern=[];
    level=0;
    gameon=false;
    $("h1").text("GAME OVER");
    setTimeout(function(){
        $("h1").text("PRESS ANY KEY TO RESTART");
    },400);
    
}
// function game()
// {
//     while(true)
//     {
//     var flag=false;
//     nextsequence();
//     for(var i=0;i<gamepattern.length;i++)
//     {
        
//         if(gamepattern[i]!=userclicked)
//         {
//             flag=true;
//             break;
//         }
//     }

//     if(flag===true)
//         {
//             $("h1").text("GAME OVER");
//             break;
//         }
//     }
    
//     gameon=false;
//     level=1;
//     gamepattern=[];
//     setTimeout(function(){
//         $("h1").text("PRESS ANY KEY TO RESTART");

//     },1000);
// }

