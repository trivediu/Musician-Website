    //Uday Trivedi
    // The js file that allows only one embedded youtube video to play at a time.  Documentation can be found at:
    // https://developers.google.com/youtube/iframe_api_reference

    
    
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
            height: '293',
            width: '520',
            videoId: 'wx80P5mUiVE',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
        player2 = new YT.Player('player2', {
            height: '293',
            width: '520',
            videoId: '2V-Hp23LFeE',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
        player3 = new YT.Player('player3', {
            height: '293',
            width: '520',
            videoId: 'BhY7D9ETraA',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
        player4 = new YT.Player('player4', {
            height: '293',
            width: '520',
            videoId: 'pWAxALmKOcU',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
        player5 = new YT.Player('player5', {
            height: '293',
            width: '520',
            videoId: 'XyS1XAv5sjs',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
        player6 = new YT.Player('player6', {
            height: '293',
            width: '520',
            videoId: 'Q2PYFvLGvWY',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
        
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            stopVideo(event.target.a.id);
        }
    }

    function stopVideo(player_id) {
        if (player_id == "player1") {
            
            player2.stopVideo();
            player3.stopVideo();
            player4.stopVideo();
            player5.stopVideo();
            player6.stopVideo();
        } else if (player_id == "player2") {
            player1.stopVideo();

            player3.stopVideo();
            player4.stopVideo();
            player5.stopVideo();
            player6.stopVideo();
        } else if (player_id == "player3") {
            player1.stopVideo();
            player2.stopVideo();

            player4.stopVideo();
            player5.stopVideo();
            player6.stopVideo();

        } else if (player_id == "player4") {
            player1.stopVideo();
            player2.stopVideo();
            player3.stopVideo();
           
            player5.stopVideo();
            player6.stopVideo();
        } else if (player_id == "player5") {
            player1.stopVideo();
            player2.stopVideo();
            player3.stopVideo();
            player4.stopVideo();
            
            player6.stopVideo();
        } else if (player_id == "player6") {
            player1.stopVideo();
            player2.stopVideo();
            player3.stopVideo();
            player4.stopVideo();
            player5.stopVideo();
            
        }
    }
// }


