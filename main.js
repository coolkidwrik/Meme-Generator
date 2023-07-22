// Meme api used for this project: https://github.com/D3vd/Meme_Api

/*
meme subreddits: r/...
regular
 - me_irl
 - dankmemes
 - wholesomememes
 - HistoryMemes
 - shitposting
anime
 - Animemes
 - anime_irl
 - animenocontext
 - goodanimemes
nerdy
 - danksciencememes
 - physicsmemes
 - chemistrymemes
 - linuxmemes
 - ProgrammerHumor
xxx
 - hentaimemes
*/

const link = "https://meme-api.com/gimme/dankmemes"

const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, author, title, s) => {
    memeImage.setAttribute("src", url);
    memeAuthor.innerHTML = `meme by: ${author}`;
    memeTitle.innerHTML = title;
    console.log(`brought to you by ${s}`);
}

const generateMeme = () => {
    // fetch("https://meme-api.com/gimme/ProgrammerHumor")
    // .then((response) => response.json())
    // .then(data) => {
    //         updateDetails(data.url, data.title, data.author);
    //     });
    fetch(link)
    .then(response => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author, data.subreddit);
    });
};

generateMemeBtn.addEventListener("click", generateMeme)

generateMeme()