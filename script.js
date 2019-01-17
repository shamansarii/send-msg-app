const alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

function initialize() {
    const keysEl = document.querySelector(".keys .card-body");
    for (let i = 0 ; i < alphabets.length; i++) {
        keysEl.innerHTML += `
        <a class="key" onclick="keyPress('${alphabets[i]}')">
            <img height="50" src="images/keyboard-key.png" alt="">
            <span>${alphabets[i]}</span>
        </a> 
    `
    }
    keysEl.innerHTML += `
    <a class="key" onclick="keyPress(' ')">
        <img height="50" src="images/space-bar-key.png" alt="">
        <span>Space</span>
    </a>   
    `;
    keysEl.innerHTML += `
    <a class="key" onclick="send()">
        <img height="50" src="images/keyboard-key.png" alt="">
        <span><i class="fa fa-arrow-alt-circle-right"></i></span>
    </a>   
    `;
}

function keyPress(key) {
    const textAreaEl = document.querySelector(".text-area .card-body");
    textAreaEl.innerHTML += key;
}

function send() {
    alert("Your message has been sent!");
    const textAreaEl = document.querySelector(".text-area .card-body");
    textAreaEl.innerHTML = '';
}