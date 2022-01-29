const shareIcon = document.getElementById("icon");
const socialMedia = document.getElementById("share");

shareIcon.addEventListener("click", ()=>{
    socialMedia.style.display = "block";
});

socialMedia.addEventListener("click", ()=> {
    socialMedia.style.display = "none";
});

