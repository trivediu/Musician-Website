// Uday Trivedi
//The main js file for videos.html that implements the video descriptions and button functions

document.addEventListener("DOMContentLoaded", function(event){
    
    initVids();
    initDescriptions();
    move(event);
    

});


//this function will initialize the descriptions to be shown for each video
function initDescriptions(event){
    var vid1 = "An original composition called 'Return to Farland' that was a featured track on my album 'Electric Visions.'";
    var vid2 = "This is an excerpt from me performing in Laguana Beach California in a Brazilian Bossa Nova setting.";
    var vid3 = "Performing a Brazilian Song with a vocalist - excerpt only.";
    var vid4= "Solo Guitar arrangement of the Bee Gees popular tune How Deep Is Your Love.";
    var vid5 = "An acoustic duo with me on guitar and a vocalist covering Sam Smith's 'Not the Only One'.";
    var vid6 = "Solo Jazz Guitar arrangement of the popular holiday song 'Let It Snow'. "

    desArr = [vid1, vid2, vid3, vid4, vid5, vid6];
 
    document.getElementById("fillDes").innerHTML = desArr[0];
}


function nextVideo(event){
    //debugger;

    //hide the current video
    vidArr[currVid].style.display = "none";

    //update the current video index to the next video. currVid variable is declared in the initVids function()
    currVid++;

    //but if we have reached the last video, reset the currVid index to zero
    if (currVid >= vidArr.length){
        currVid = 0;
    }

    //now display the next video
    vidArr[currVid].style.display = "block";

    //now update the description for the video
    document.getElementById("fillDes").innerHTML = desArr[currVid];

    //stop propagation
    //event.stopPropagation();
}


function prevVideo(event){
    //debugger;

    //hide the current video
    vidArr[currVid].style.display = "none";
    console.log(currVid);
    //update the current video index to the next video. currVid variable is declared in the initVids function()
    currVid--;
    console.log(currVid);
    //but if we have reached the first video, reset the currVid index to the last
    if (currVid < 0){
        currVid = vidArr.length - 1;
    }

    //now display the next video
    vidArr[currVid].style.display = "block";

    //now update the description for the video
    document.getElementById("fillDes").innerHTML = desArr[currVid];

    //stop propagation
    //event.stopPropagation();
}

function redirect(event){
    location.href = "https://youtube.com/trivediu";
}



//Basic Function that will hide all the videos on the page, except the first one
function initVids(event)
{

    //Get an Array of all existing videos
    vidArr = document.getElementsByClassName("video");

    
    //Initialize a variable i (to be used in the for loop below) to zero
    var i = 0;

    //debugger;
    //Initialize the current video index - this variable will be used in the nextVideo and prevVideo functions
    currVid = 0; 

    for (i = 0; i < vidArr.length; i++){

        if (i===0){

            vidArr[i].style.display = "block";
        }
        else{
            vidArr[i].style.display = "none";
        }
        
    }

    // document.getElementById("video1").style.display = "block";
    // document.getElementById("video2").style.display = "block";

    // event.stopPropagation();
}





function move(event) {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

function move() {
    var elem = document.getElementById("myBar"); 
    var elem2 = document.getElementById("myBar2"); 
    // document.getElementById("mybar2").innerHTML = "hello"; 
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            document.getElementById("status").innerHTML = "All Videos Loaded!";
            document.getElementById("status").style.backgroundColor = "green";
            document.getElementById("status").style.color = "white";
            document.getElementById("mybar2").style.backgroundColor = "green";
            document.getElementById("mybar2").style.color = "white";
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';
            document.getElementById("mybar2").innerHTML = width * 1 + '%';
        }
    }
}