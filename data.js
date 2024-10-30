const endpoint = "http://192.168.84.247"

let containerHome = document.getElementById("containerHome")
let start = document.getElementById("start")
let containerSelect = document.getElementById("containerSelect")
let select1 = document.getElementById("select1")
let containerGameBerhitung = document.getElementById("containerGameBerhitung")
let select2 = document.getElementById("select2")
let gameMemasangkan = document.getElementById("gameMemasangkan")


containerSelect.style.display = "none"
containerGameBerhitung.style.display = "none"


// Inisialisasi AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Fungsi untuk membuat dan menghubungkan audio dengan gainNode (kontrol volume)
function createAudioElement(audioElement) {
    const source = audioContext.createMediaElementSource(audioElement);
    const gainNode = audioContext.createGain();

    source.connect(gainNode).connect(audioContext.destination);

    return gainNode;
}

// Ambil elemen audio dari HTML
const song = document.getElementById('song');
const soundButton = document.getElementById('soundButton');

// Buat gainNode untuk masing-masing audio
const gainNode1 = createAudioElement(song);
const gainNode2 = createAudioElement(soundButton);

// Volume default
gainNode1.gain.value = 1;
gainNode2.gain.value = 0.7;

function bunyi() {
    // Deteksi saat audio2 mulai diputar, rendahkan volume audio1
    soundButton.addEventListener('play', () => {
        gainNode1.gain.value = 0.5;  // Kurangi volume audio1
    });

    // Deteksi saat audio2 berhenti diputar, kembalikan volume audio1
    soundButton.addEventListener('pause', () => {
        gainNode1.gain.value = 1;  // Kembalikan volume audio1
    });

    // Deteksi saat audio2 berakhir, kembalikan volume audio1
    soundButton.addEventListener('ended', () => {
        gainNode1.gain.value = 1;  // Kembalikan volume audio1
    });

    soundButton.play()
    return soundButton
}

start.addEventListener("click", function () {
    window.location.getElementById = "containerSelect"
    containerSelect.style.display = "block"
    containerHome.style.display = "none"
    containerGameBerhitung.style.display = "none"

})

function showRandomLi() {
    const listItems = document.querySelectorAll('#randomli li');

    listItems.forEach(item => {
        item.classList.add('hidden');
    });

    // Pilih satu elemen <li> secara acak
    const randomIndex = Math.floor(Math.random() * listItems.length);
    const randomItem = listItems[randomIndex];

    // Tampilkan elemen yang dipilih secara acak
    randomItem.classList.remove('hidden');

    containerSelect.style.display = "none"
    containerHome.style.display = "none"
    containerGameBerhitung.style.display = "block"
}

// page berhitung 
let inputB1 = document.getElementById('inputB1')
let inputB2 = document.getElementById('inputB2')
let inputB3 = document.getElementById('inputB3')
let inputB4 = document.getElementById('inputB4')
let running = document.getElementById('running')
let gagalRuninng = document.getElementById('gagalRuninng')

function lanjut1() {
    if (inputB1.value == 9) {
        runing.style.display = "block"
        containerGameBerhitung.style.display = "none"
        fetch(endpoint + "/robot", {
            method: "POST"
        }).then(Response => Response.text()).then(result => console.log(result))
    } else if (inputB1.value == "") {
        alert('isi dulu yuk 🤗')
    }
    else {
        gagalRuning.style.display = "block"
        containerGameBerhitung.style.display = "none"
    }

    inputB1.value = ""
}
function lanjut2() {
    if (inputB2.value == 10) {
        runing.style.display = "block"
        containerGameBerhitung.style.display = "none"
        fetch(endpoint + "/robot", {
            method: "POST"
        }).then(Response => Response.text()).then(result => console.log(result))
    } else if (inputB2.value == "") {
        alert('isi dulu yuk 🤗')
    }
    else {
        gagalRuning.style.display = "block"
        containerGameBerhitung.style.display = "none"
    }

    inputB2.value = ""
}

function lanjut3() {
    if (inputB3.value == 6) {
        runing.style.display = "block"
        containerGameBerhitung.style.display = "none"
        fetch(endpoint + "/robot", {
            method: "POST"
        }).then(Response => Response.text()).then(result => console.log(result))
    } else if (inputB3.value == "") {
        alert('isi dulu yuk 🤗')
    }
    else {
        gagalRuning.style.display = "block"
        containerGameBerhitung.style.display = "none"
    }

    inputB3.value = ""
}

function lanjut4() {
    if (inputB4.value == 7) {
        runing.style.display = "block"
        containerGameBerhitung.style.display = "none"
        fetch(endpoint + "/robot", {
            method: "POST"
        }).then(Response => Response.text()).then(result => console.log(result))
    } else if (inputB4.value == "") {
        alert('isi dulu yuk 🤗')
    }
    else {
        gagalRuning.style.display = "block"
        containerGameBerhitung.style.display = "none"
    }

    inputB4.value = ""
}

function lanjut5() {
    if (inputB5.value == 12) {
        runing.style.display = "block"
        containerGameBerhitung.style.display = "none"
        fetch(endpoint + "/robot", {
            method: "POST"
        }).then(Response => Response.text()).then(result => console.log(result))
    } else if (inputB5.value == "") {
        alert('isi dulu yuk 🤗')
    }
    else {
        gagalRuning.style.display = "block"
        containerGameBerhitung.style.display = "none"
    }

    inputB5.value = ""
}

function lanjut6() {
    if (inputB6.value == 3) {
        runing.style.display = "block"
        containerGameBerhitung.style.display = "none"
        fetch(endpoint + "/robot", {
            method: "POST"
        }).then(Response => Response.text()).then(result => console.log(result))
    } else if (inputB6.value == "") {
        alert('isi dulu yuk 🤗')
    }
    else {
        gagalRuning.style.display = "block"
        containerGameBerhitung.style.display = "none"
    }

    inputB6.value = ""
}

function lanjut7() {
    if (inputB7.value == 4) {
        runing.style.display = "block"
        containerGameBerhitung.style.display = "none"
        fetch(endpoint + "/robot", {
            method: "POST"
        }).then(Response => Response.text()).then(result => console.log(result))
    } else if (inputB7.value == "") {
        alert('isi dulu yuk 🤗')
    }
    else {
        gagalRuning.style.display = "block"
        containerGameBerhitung.style.display = "none"
    }

    inputB7.value = ""
}

function lanjut8() {
    if (inputB8.value == 8) {
        runing.style.display = "block"
        containerGameBerhitung.style.display = "none"
        fetch(endpoint + "/robot", {
            method: "POST"
        }).then(Response => Response.text()).then(result => console.log(result))
    } else if (inputB8.value == "") {
        alert('isi dulu yuk 🤗')
    }
    else {
        gagalRuning.style.display = "block"
        containerGameBerhitung.style.display = "none"
    }

    inputB8.value = ""
}

function lanjut9() {
    if (inputB9.value == 5) {
        runing.style.display = "block"
        containerGameBerhitung.style.display = "none"
        fetch(endpoint + "/robot", {
            method: "POST"
        }).then(Response => Response.text()).then(result => console.log(result))
    } else if (inputB9.value == "") {
        alert('isi dulu yuk 🤗')
    }
    else {
        gagalRuning.style.display = "block"
        containerGameBerhitung.style.display = "none"
    }

    inputB9.value = ""
}

function lanjut10() {
    if (inputB10.value == 4) {
        runing.style.display = "block"
        containerGameBerhitung.style.display = "none"
        fetch(endpoint + "/robot", {
            method: "POST"
        }).then(Response => Response.text()).then(result => console.log(result))
    } else if (inputB10.value == "") {
        alert('isi dulu yuk 🤗')
    }
    else {
        gagalRuning.style.display = "block"
        containerGameBerhitung.style.display = "none"
    }

    inputB10.value = ""
}

// page berhitung selesai

let runing = document.getElementById('runing')
let gagalRuninguning = document.getElementById('runing')

runing.style.display = "none"
gagalRuning.style.display = "none"


function back() {
    containerSelect.style.display = "block"
    containerGameBerhitung.style.display = "none"
    containerHome.style.display = "none"
    gagalRuning.style.display = "none"
    runing.style.display = "none"
}
