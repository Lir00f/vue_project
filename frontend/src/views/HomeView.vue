<template>
  <div class="background">
    <v-container>
      <v-row justify="center">
        <h1 class="title">Take You To Incredible <br> Speed And Go Further</h1>
        <div class="measurement">520 nm</div>
        <div class="description">Torque</div>
        <p class="line lime2"></p>
        <div class="measurement2">4.4 s</div>
        <div class="description2">0-100km/h</div>
        <p class="line lime3"></p>
        <div class="measurement3">289 km/h</div>
        <div class="description3">Max Speed</div>
      </v-row>
      <button class="button">Add To Cart</button>
    </v-container>
  </div>
</template>

<style>
 .button > img {
    margin-left: auto; /* Отступ слева от картинки до края кнопки */
  }

.background {
  background-image: url(https://wallpapersmug.com/download/1920x1080/3712ad/bmw-m4-on-road.jpg);
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  object-fit: cover; 

  
}

.lime2 {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 5.2vw;
  margin-left: 370px;
}

.lime3 {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 5vw;
  margin-left: 640px;
}

.line {
  width: 0.2vw;
  height: 3.5vw;
  background-color: rgb(255, 255, 255);
  border-radius: 1vw;
}


.measurement {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20%;
  margin-left: 50px;
  color: white;
  font-size: 2.5vw;
  font-family: 'Syncopate-Bold', sans-serif;
  font-weight: 400;
}

.description {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 13.5%;
  margin-left: 50px;
  color: #ccc;
  font-size: 1.25vw;
  font-family: 'Syncopate-Bold', sans-serif;
  font-weight: 400;
}
.measurement2 {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20%;
  margin-left: 420px;
  color: white;
  font-size: 2.5vw;
  font-family: 'Syncopate-Bold', sans-serif;
  font-weight: 400;
}

.description2 {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 13.5%;
  margin-left: 420px;
  color: #ccc;
  font-size: 1.25vw;
  font-family: 'Syncopate-Bold', sans-serif;
  font-weight: 400;
}
.measurement3 {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20%;
  margin-left: 710px;
  color: white;
  font-size: 2.5vw;
  font-family: 'Syncopate-Bold', sans-serif;
  font-weight: 400;
}

.description3 {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 13.5%;
  margin-left: 710px;
  color: #ccc;
  font-size: 1.25vw;
  font-family: 'Syncopate-Bold', sans-serif;
  font-weight: 400;
}

.button {
    position: fixed; /* Позиционирование кнопки относительно окна */
    bottom: 5vw; /* Отступ снизу */
    right: -3px; /* Отступ справа */
    width: 15vw; /* Ширина кнопки */
    height: 5vw; /* Высота кнопки */
    background-color: transparent; /* Цвет фона кнопки */
    color: white; /* Цвет текста кнопки */
    border-top-left-radius: 25px; /* Закругление левого верхнего угла */
    border-bottom-left-radius: 25px; /* Закругление левого нижнего угла */
    border: 2px solid white; /* Обводка кнопки */
    font-size: 1.2vw;
    font-family: 'Syncopate-Bold', sans-serif;
    align-items: center; /* Выравнивание элементов по вертикали */
  }

  .cursor {
  position: fixed;
  z-index: 9999;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
  opacity: 0.5;
  pointer-events: none;
  transition: all 0.15s ease-in-out;
}

@font-face {
  font-family: Syncopate-Bold;
  src: url(../assets/Syncopate-Bold.ttf);
}

.title {
  position: relative;
  margin-top: 5vw;
  margin-left: -41vw;
  font-weight: 300;
  font-family: 'Syncopate-Bold';
  font-size: 4vw;
  background-color: #ffffff;
  background-image: linear-gradient(-90deg,#3088cf, #5900ff, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
}

.title::before {
  content: "";
  position: absolute;
  top: -30px;
  left: -100px;
  width: 150%;
  height: 150%;
  background-color: rgba(29, 29, 29, 0.5);
  filter: blur(80px); /* Apply a 4px blur filter to the dark overlay */
  z-index: -1;
}

</style>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    document.body.style.overflow = 'hidden';

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
}


document.addEventListener("mousemove", function(e) {
  var cursor = document.querySelector(".cursor");
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
</script>
