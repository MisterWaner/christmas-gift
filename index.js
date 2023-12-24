const christmasSong = document.querySelector("#christmas-song");
const arrow = document.querySelector(".arrow");
const mainContainer = document.querySelector(".main-container");
const partOne = document.querySelector(".part-one");
const partTwo = document.querySelector(".part-two");
const chevron = document.querySelector(".chevron");

/* Scroll to main container */
function scrollToMain() {
    arrow.addEventListener("click", () => {
        mainContainer.scrollIntoView({ behavior: "smooth" });
    });

    setTimeout(() => {
        partOne.classList.add("show-text");
    }, 1500);

    setTimeout(() => {
        partTwo.classList.add("show-text");
    }, 2500);
}

/* Switch to curtain */
function switchToCurtain() {
    chevron.addEventListener("click", () => {
        window.location.href = "./curtain.html";
    });
}

/* Launch song when DOM is loaded */
document.addEventListener("DOMContentLoaded", () => {

    const isAudioPlaying = sessionStorage.getItem("isAudioPlaying");

    if (isAudioPlaying) {
        christmasSong.play();
    } else {
        christmasSong.play();
        sessionStorage.setItem("isAudioPlaying", true);
    }

    window.addEventListener("beforeunload", () => {
        christmasSong.pause();
    })
})