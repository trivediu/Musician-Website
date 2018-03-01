//Jay Swaminarayan - Swami Shreeji

document.addEventListener("DOMContentLoaded", function(event){
    hideVids();


});



function hideVids(event)
{
    var vidArr = document.getElementsByClassName("video");
    var i = 0;
    

    for (i = 0; i < vidArr.length; i++){
        console.log(i);
        if (i===0){
            console.log("zeor detected");
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