document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.my-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
            navbar.style.backgroundColor = '#444445';

            navbar.style.backdropFilter = 'none';
        } else {
             navbar.style.backgroundColor = 'rgba(68,68,69,0.8)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });
});

function pauseVideo() {
    var video = document.querySelector('.watch-video');
    var img1=document.querySelector('.play-im');
    var img2=document.querySelector('.pause-im');
    if (video.paused) {
        video.play();
        img1.style.display="none";

        img2.style.display="initial";
    } else {
        video.pause();
        img2.style.display="none";
        img1.style.display="initial";

    }
}
document.addEventListener("DOMContentLoaded", function() {
    pauseVideo();
});


  