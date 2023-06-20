// Код JavaScript для проигрывания аудио и анимации кнопки
var audioButton = document.getElementById('audioButton');
var audio = new Audio('toi.mp3');
var isPlaying = false;
/*audio.play(); // Проигрываем аудио при загрузке сайта
audioButton.classList.add('playing'); */ // 
audioButton.addEventListener('click', function () {
  if (isPlaying) {
    audio.pause();
    audioButton.classList.remove('playing');
  } else {
    audio.play();
    audioButton.classList.add('playing');
  }

  isPlaying = !isPlaying;
});

// Код JavaScript для анимации текста
var animatedText = document.getElementById('animatedText');
var textContent = animatedText.innerHTML;

animatedText.innerHTML = textContent.repeat(4); // Измените количество повторений текста здесь

// Код JavaScript для обратного отсчета до свадьбы
var weddingDate = new Date('2023-06-30 17:00:00'); // Установите дату и время свадьбы
var countdownElement = document.getElementById('countdown');

function updateCountdown() {
  var now = new Date();
  var timeDiff = weddingDate - now;

  if (timeDiff > 0) {
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    countdownElement.textContent = days + ' күн : ' + hours + ' сағат : ' + minutes + ' минут : ' + seconds + ' секунд';
  } else {
    countdownElement.textContent = 'Ұзату басталып кетті ғой уж!';
  }
}

setInterval(updateCountdown, 1000);

// Код JavaScript для слайдера дресс-кода
var dressCodeImages = ['https://zhanaqorgan-tynysy.kz/uploads/posts/2020-04/1585904237_kim.jpg', 'https://massaget.kz/userdata/uploads/u67177/1429692616_l.jpg', 'https://storage.yvision.kz/images/publication/covers/4d/4d28a9fb3fe4e461776fc202ede75504.jpg']; // Укажите пути к изображениям для слайдера
var dressCodeImage = document.getElementById('dressCodeImage');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');
var currentIndex = 0;

function showCurrentImage() {
  dressCodeImage.src = dressCodeImages[currentIndex];
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % dressCodeImages.length;
  showCurrentImage();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + dressCodeImages.length) % dressCodeImages.length;
  showCurrentImage();
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Код JavaScript для управления количеством гостей
var guestCountInput = document.getElementById('guestCount');
var incrementButton = document.getElementById('incrementButton');
var decrementButton = document.getElementById('decrementButton');

incrementButton.addEventListener('click', function () {
  guestCountInput.stepUp();
});

decrementButton.addEventListener('click', function () {
  guestCountInput.stepDown();
});
