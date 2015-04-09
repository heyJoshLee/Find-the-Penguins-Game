
var loser = function() {
    document.getElementById('yeti').style.backgroundImage = "url('img/yeti.png')";
    if(!alert('arrgh! You lose. PLay again?')){window.location.reload();}
    document.getElementById('yeti').style.backgroundImage = "url('img/mound_9.png')";
}


var cardArray = ['penguin_1.png', 'penguin_2.png', 'penguin_3.png', 'penguin_4.png',
                 'penguin_5.png', 'penguin_6.png', 'penguin_7.png', 'penguin_8.png', 'yeti.png']

var points = 0;

var stillPlaying = true;

var soundEffects = true;

var musicPlaying = false;

var lastRandom = undefined;

var reloadGame = function() {
            var keepPlaying  = window.confirm('Your score was: ' + points + '. ' + "Press 'OK' to Keep playing!");
                if(keepPlaying == true) {
                    points = 0;
                    document.getElementById('points').innerHTML = points;
                    stillPlaying = true;
                }
}
        


var getCardStats1 = function() {
        if(stillPlaying == true) {
                var randomNum = Math.floor((Math.random() * 9));
                    while(randomNum === lastRandom) {
                        var randomNum = Math.floor((Math.random() * 9));
                    }
                        if(randomNum != 8) {
                            var picFromRandom = cardArray[randomNum];
                            var finalPic = "img/" + picFromRandom; 
                            document.getElementById('spot1').src = finalPic;
                            setTimeout(function(){document.getElementById('spot1').src = 'img/mound_1.png';},800);
                            lastRandom = randomNum;
                            points ++;
                            document.getElementById('points').innerHTML = points;
                            if(soundEffects == true){document.getElementById('audiotag2').play();}
                        } else{ 
                            stillPlaying = false;
                            document.getElementById('spot1').src = 'img/yeti.png';
                            if(soundEffects == true){document.getElementById('audiotag2').play();}
                            setTimeout(reloadGame,800) 
                            setTimeout(function(){document.getElementById('spot1').src = 'img/mound_1.png';},800);
                            }
                            }
        else{
            return;
            }
}
   
var getCardStats2 = function() {
        if(stillPlaying == true) {
                var randomNum = Math.floor((Math.random() * 9));
                    while(randomNum === lastRandom) {
                        var randomNum = Math.floor((Math.random() * 9));
                    }
                        if(randomNum != 8) {
                            var picFromRandom = cardArray[randomNum];
                            var finalPic = "img/" + picFromRandom; 
                            document.getElementById('spot2').src = finalPic;
                            setTimeout(function(){document.getElementById('spot2').src = 'img/mound_1.png';},800);
                            lastRandom = randomNum;
                            points ++;
                            document.getElementById('points').innerHTML = points;
                            if(soundEffects === true){document.getElementById('audiotag2').play();}
                        } else{ 
                            stillPlaying = false;
                            document.getElementById('spot2').src = 'img/yeti.png';
                            if(soundEffects === true){document.getElementById('audiotag1').play();}
                            setTimeout(reloadGame,800) 
                            setTimeout(function(){document.getElementById('spot2').src = 'img/mound_1.png';},800);
                            }
                            }
        else{
            return;
            }
}


    
    var getCardStats3 = function() {
        if(stillPlaying == true) {
                var randomNum = Math.floor((Math.random() * 9));
                    while(randomNum === lastRandom) {
                        var randomNum = Math.floor((Math.random() * 9));
                    }
                        if(randomNum != 8) {
                            var picFromRandom = cardArray[randomNum];
                            var finalPic = "img/" + picFromRandom; 
                            document.getElementById('spot3').src = finalPic;
                            setTimeout(function(){document.getElementById('spot3').src = 'img/mound_1.png';},800);
                            lastRandom = randomNum;
                            points ++;
                            document.getElementById('points').innerHTML = points;
                           if(soundEffects === true){document.getElementById('audiotag2').play();}
                        } else{ 
                            stillPlaying = false;
                            document.getElementById('spot3').src = 'img/yeti.png';
                            if(soundEffects === true){document.getElementById('audiotag1').play();}
                            setTimeout(reloadGame,800) 
                            setTimeout(function(){document.getElementById('spot3').src = 'img/mound_1.png';},800);
                            }
                            }
        else{
            return;
            }
    }
        
        var getCardStats4 = function() {
        if(stillPlaying == true) {
                var randomNum = Math.floor((Math.random() * 9));
                    while(randomNum === lastRandom) {
                        var randomNum = Math.floor((Math.random() * 9));
                    }
                        if(randomNum != 8) {
                            var picFromRandom = cardArray[randomNum];
                            var finalPic = "img/" + picFromRandom; 
                            document.getElementById('spot4').src = finalPic;
                            setTimeout(function(){document.getElementById('spot4').src = 'img/mound_1.png';},800);
                            lastRandom = randomNum;
                            points ++;
                            document.getElementById('points').innerHTML = points;
                            if(soundEffects === true){document.getElementById('audiotag2').play();}
                        } else{ 
                            stillPlaying = false;
                            document.getElementById('spot4').src = 'img/yeti.png';
                            if(soundEffects === true){document.getElementById('audiotag1').play();}
                            setTimeout(reloadGame,800) 
                            setTimeout(function(){document.getElementById('spot4').src = 'img/mound_1.png';},800);
                            }
                            }
        else{
            return;
            }
        }
            
            var getCardStats5 = function() {
        if(stillPlaying == true) {
                var randomNum = Math.floor((Math.random() * 9));
                    while(randomNum === lastRandom) {
                        var randomNum = Math.floor((Math.random() * 9));
                    }
                        if(randomNum != 8) {
                            var picFromRandom = cardArray[randomNum];
                            var finalPic = "img/" + picFromRandom; 
                            document.getElementById('spot5').src = finalPic;
                            setTimeout(function(){document.getElementById('spot5').src = 'img/mound_1.png';},800);
                            lastRandom = randomNum;
                            points ++;
                            document.getElementById('points').innerHTML = points;
                            if(soundEffects === true){document.getElementById('audiotag2').play();}
                        } else{ 
                            stillPlaying = false;
                            document.getElementById('spot5').src = 'img/yeti.png';
                            if(soundEffects === true){document.getElementById('audiotag1').play();}
                            setTimeout(reloadGame,800) 
                            setTimeout(function(){document.getElementById('spot5').src = 'img/mound_1.png';},800);
                            }
                            }
        else{
            return;
            }
            }
                
                var getCardStats6 = function() {
        if(stillPlaying == true) {
                var randomNum = Math.floor((Math.random() * 9));
                    while(randomNum === lastRandom) {
                        var randomNum = Math.floor((Math.random() * 9));
                    }
                        if(randomNum != 8) {
                            var picFromRandom = cardArray[randomNum];
                            var finalPic = "img/" + picFromRandom; 
                            document.getElementById('spot6').src = finalPic;
                            setTimeout(function(){document.getElementById('spot6').src = 'img/mound_1.png';},800);
                            lastRandom = randomNum;
                            points ++;
                            document.getElementById('points').innerHTML = points;
                            if(soundEffects === true){document.getElementById('audiotag2').play();}
                        } else{ 
                            stillPlaying = false;
                            document.getElementById('spot6').src = 'img/yeti.png';
                            if(soundEffects === true){document.getElementById('audiotag1').play();}
                            setTimeout(reloadGame,800) 
                            setTimeout(function(){document.getElementById('spot6').src = 'img/mound_1.png';},800);
                            }
                            }
        else{
            return;
            }
                }
                    
                    
                    var getCardStats7 = function() {
        if(stillPlaying == true) {
                var randomNum = Math.floor((Math.random() * 9));
                    while(randomNum === lastRandom) {
                        var randomNum = Math.floor((Math.random() * 9));
                    }
                        if(randomNum != 8) {
                            var picFromRandom = cardArray[randomNum];
                            var finalPic = "img/" + picFromRandom; 
                            document.getElementById('spot7').src = finalPic;
                            setTimeout(function(){document.getElementById('spot7').src = 'img/mound_1.png';},800);
                            lastRandom = randomNum;
                            points ++;
                            document.getElementById('points').innerHTML = points;
                            if(soundEffects === true){document.getElementById('audiotag2').play();}
                        } else{ 
                            stillPlaying = false;
                            document.getElementById('spot7').src = 'img/yeti.png';
                            if(soundEffects === true){document.getElementById('audiotag1').play();}
                            setTimeout(reloadGame,800) 
                            setTimeout(function(){document.getElementById('spot7').src = 'img/mound_1.png';},800);
                            }
                            }
        else{
            return;
            }
                    }
                        
                        
                        var getCardStats8 = function() {
        if(stillPlaying == true) {
                var randomNum = Math.floor((Math.random() * 9));
                    while(randomNum === lastRandom) {
                        var randomNum = Math.floor((Math.random() * 9));
                    }
                        if(randomNum != 8) {
                            var picFromRandom = cardArray[randomNum];
                            var finalPic = "img/" + picFromRandom; 
                            document.getElementById('spot8').src = finalPic;
                            setTimeout(function(){document.getElementById('spot8').src = 'img/mound_1.png';},800);
                            lastRandom = randomNum;
                            points ++;
                            document.getElementById('points').innerHTML = points;
                            if(soundEffects === true){document.getElementById('audiotag2').play();}
                        } else{ 
                            stillPlaying = false;
                            document.getElementById('spot8').src = 'img/yeti.png';
                            if(soundEffects === true){document.getElementById('audiotag1').play();}
                            setTimeout(reloadGame,800) 
                            setTimeout(function(){document.getElementById('spot8').src = 'img/mound_1.png';},800);
                            }
                            }
        else{
            return;
            }
                        }
                            
                            
        var getCardStats9 = function() {
        if(stillPlaying == true) {
                var randomNum = Math.floor((Math.random() * 9));
                    while(randomNum === lastRandom) {
                        var randomNum = Math.floor((Math.random() * 9));
                    }
                        if(randomNum != 8) {
                            var picFromRandom = cardArray[randomNum];
                            var finalPic = "img/" + picFromRandom; 
                            document.getElementById('spot9').src = finalPic;
                            setTimeout(function(){document.getElementById('spot9').src = 'img/mound_1.png';},800);
                            lastRandom = randomNum;
                            points ++;
                            document.getElementById('points').innerHTML = points;
                            if(soundEffects === true){document.getElementById('audiotag2').play();}
                        } else{ 
                            stillPlaying = false;
                            document.getElementById('spot9').src = 'img/yeti.png';
                            if(soundEffects === true){document.getElementById('audiotag1').play();}
                            setTimeout(reloadGame,800) 
                            setTimeout(function(){document.getElementById('spot9').src = 'img/mound_1.png';},800);
                            }
                            }
        else{
            return;
            }
        }
