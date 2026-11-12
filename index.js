const movie = document.getElementById("movie")
const poster = document.getElementById("poster")
const title = document.getElementById("title")
const description = document.getElementById("description")

movie.addEventListener('change', () => {
    if (movie.value === "space") {
        title.innerHTML = 'Космическая станция'
        description.innerHTML = 'Команда астронавтов получает загадочный сигнал.'
        poster.src = 'covers/space.jpg';
        poster.alt = 'Обложка фильма «Космическая станция»';
    }
    else if (movie.value === "house") {
        title.innerHTML = 'Тайна старого дома'
        description.innerHTML = 'Друзья находят письмо, спрятанное под половицей.'
        poster.src = 'covers/house.jpg';
        poster.alt = 'Обложка фильма «Тайна старого дома»';
    }
    else if (movie.value === "train") {
        title.innerHTML = 'Поезд на север'
        description.innerHTML = 'Пассажиры знакомятся во время поездки через заснеженные горы.'
        poster.src = 'covers/train.jpg';
        poster.alt = 'Обложка фильма «Поезд на север»';
    }
});