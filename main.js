let mybutton = document.getElementById("go-top");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
// FOR NAVBAR SHOWING AND HIDING FUNCTION
function navHidenShow() {
  if (window.scrollY > 500) {
    document.getElementById('navbar').className = 'nav-show-ani';
  }
  else if (window.scrollY < 500) {
    document.getElementById('navbar').className = 'nav-hide-ani'
  }
}

window.onscroll = function () { scrollFunction(); navHidenShow(); };
// FOR SHOWING PRELOADER ON LOADING
const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})

// FOR DESCRIPTION SHOW MORE AND LESS BUTTON
// function descriptinDisplay() {
//   var dots = document.getElementById("3-dots");
//   var moreText = document.getElementById("more-description");
//   var btnText = document.getElementById("desc-more-less");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Show more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Show less";
//     moreText.style.display = "inline";
//   }
// }

//FOR CLOSE BUTTON IN VIDEO PLAYER
var videoPlayer = document.getElementById("video-player");
function closeVideoPlayer() {
  videoPlayer.style.display = "none";
}

// FOR PLAY VIDEO ON CLICKING
var youtubeVideoLink = document.getElementById('play-link');
var ChannelName = document.getElementById('channel-name');
var ChannelLink = document.getElementById('go-to-channel');
var ProfilePicLink = document.getElementById('profile-pic');
var VideoTitle = document.getElementById('youtube-video-title-h1');
var VideoDescription = document.getElementById('youtube-video-description-p');
var youtubeVideo = document.getElementById('youtube-frame');
function playVideo(videoSourceLink, channelHref, channelName, profilePicLink, videoTitle, videoDescription) {
  youtubeVideo.src = videoSourceLink;
  ChannelName.innerHTML = channelName;
  ChannelLink.href = channelHref;
  ProfilePicLink.src = profilePicLink;
  VideoTitle.innerHTML = videoTitle;
  VideoDescription.innerHTML = videoDescription;
  videoPlayer.style.display = "block";
}


// FOR STOP THE SCROLL ABOVE SEECTION
document.addEventListener('DOMContentLoaded', function () {
  // Get all anchor links with the "scroll-link" class
  const anchorLinks = document.querySelectorAll('.scrollLink');

  // Add a click event listener to each anchor link
  anchorLinks.forEach(function (anchorLink) {
    anchorLink.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default scroll behavior

      // Get the target div associated with this link
      const targetId = anchorLink.getAttribute('href').substring(1);
      const targetDiv = document.querySelector('#' + targetId);

      // Calculate the offset position to scroll to (200px before the top of the div)
      const offset = targetDiv.offsetTop - 70;

      // Use smooth scrolling to the calculated offset position
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    });
  });
});

// FOR SHOW ABOUT US SECTION
let aboutusSection = document.getElementById('aboutus-section');
function showAboutUsSection() {
  if (aboutusSection.style.display === 'none' || aboutusSection.style.display === '') {
    aboutusSection.style.display = 'block'
    document.body.style.display = 'hidden'
  }
  else {
    aboutusSection.style.display = 'none'
    document.body.style.display = 'scroll'
  }
};

// FOR HIDE ABOUT US SECTION
function aboutusHomeback() {
  aboutusSection.style.display = 'none'
  document.body.style.display = 'scroll'
}