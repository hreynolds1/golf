function randint(low, high) {
    return Math.round((Math.random() * (high-low))+low)
}
function choice(li) {
    return li[randint(0,li.length-1)];
}
var distance=0;
var shots=0;
var par=0;
function startgame(){
    distance=randint(350,450)
    document.getElementById("start").hidden=true
    document.getElementById("distance").innerHTML="Distance to hole: "+distance+"m"
    document.getElementById("clubs").hidden=false;
    document.getElementById("shotcount").innerHTML="Shots: 0"
    par=Math.min(parseInt(distance/75+randint(0,1)),6)
    document.getElementById("par").innerHTML="Par: "+par
}

function hitball(club){
    shots+=1
    document.getElementById("shotcount").innerHTML="Shots: "+shots
    clubs=["driver","5iron","wedge","putter"]
    lowend=[150,75,25,0]
    highend=[225,125,75,25]
    distance-=randint(lowend[clubs.indexOf(club)],highend[clubs.indexOf(club)])
    if (distance<-5){distance*=-1}
    if (distance>=-5 && distance<=5){gameend()} else {document.getElementById("distance").innerHTML="Distance to hole: "+distance+"m"}
}
function gameend(){
    console.log(shots)
    console.log(par)
    console.log(shots-par)
    document.getElementById("clubs").hidden=true
    document.getElementById("distance").innerHTML=""
    document.getElementById("score").innerHTML="Score: "+(shots-par)
    rating=document.getElementById("parrating")
    if (shots==1){
        rating.innerHTML="Hole in one!"
    } else {
        switch(shots-par){
            case 0:
                rating.innerHTML="Par"
                break;
            case -1:
                rating.innerHTML="Birdie"
                break;
            case -2:
                rating.innerHTML="Eagle"
                break;
            case -3:
                rating.innerHTML="Albatross"
                break;
            case -4:
                rating.innerHTML="Condor"
                break;
            case 1:
                rating.innerHTML="Bogie"
                break;
            case 2:
                rating.innerHTML="Double Bogie"
                break;
            case 3:
                rating.innerHTML="Triple Bogie"
                break;
            case 4:
                rating.innerHTML="Quadruple Bogie"    
                break;
            case 5:
                rating.innerHTML="Quintuple Bogie"
                break;
            default:
                rating.innerHTML=""+(shots-par)+"x Bogie"
                break;
        }
    }
}