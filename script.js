const words = ["AI Engineer", "AI Student"];
let i = 0;
const tagline = document.querySelector(".tagline h3");

function typeWriter(word) {
    let j = 0;
    tagline.textContent = "";
    const interval = setInterval(() => {
        tagline.textContent += word[j];
        j++;
        if (j === word.length) {
            clearInterval(interval);
            setTimeout(() => backspace(word), 1000);
        }
    }, 100);
}

function backspace(word) {
    let j = word.length;
    const interval = setInterval(() => {
        tagline.textContent = tagline.textContent.slice(0, -1);
        j--;
        if (j === 0) {
            clearInterval(interval);
            i = (i + 1) % words.length;
            setTimeout(() => typeWriter(words[i]), 500);
        }
    }, 50);
}

typeWriter(words[i]);


const form = document.getElementById('form');

form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});


// document.getElementById('year').textContent = new Date().getFullYear();