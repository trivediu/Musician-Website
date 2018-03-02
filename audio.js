//This is essentially very similar in functionality to the videos.js file, but recreating a new js file
//because I will be using different descriptions for the audio.


document.addEventListener("DOMContentLoaded", function(event){
   //debugger;
    initVids();
    initDescriptions();
    //document.getElementById("buttonNext").addEventListener("click", nextVideo);
    //document.getElementById("buttonPrev").addEventListener("click", prevVideo);

});


//this function will initialize the descriptions to be shown for each video
function initDescriptions(event){
    var vid1 = "In 2012 I had the opportunity to collaborate with Warner Records in LA and rearrange Usher's hit single Climax";
    var vid2 = "My collaboration with Netwwerk Records to remix Wanting Qu for a re-release of her single in Asia";
    var vid3 = "My collaboration with Swedish House Producer Rasmus Faber to rearrange his song featuring me on guitar.";
    var vid4 = "My collaboration with Blue Note Records (New York) to rearrange Jose James for reissue";
    var vid5 = "My version of 'Over the Rainbow' from my Album 'Electric Visions'.  Click the track buttons to hear other songs from the album";

    desArr = [vid1, vid2, vid3, vid4, vid5];
 
    document.getElementById("fillDes").innerHTML = desArr[0];
}


function nextVideo(event){
    debugger;

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
    //Get an Array of all existing audios
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