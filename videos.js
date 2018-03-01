//Jay Swaminarayan - Swami Shreeji

document.addEventListener("DOMContentLoaded", function(event){
    hideVids();


    });

hideVids(event)
{
    var vidArr = document.getElementsByClassName("video");
    var i = 0;

    for (i = 0; i < vidArr.length; i++){
        if (i === 0){
            vidArr[i].style.display = "block";
        }
        
        vidArr[i].style.display = "none";
    }



    event.stopPropagation();
}