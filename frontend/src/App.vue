
<script>
// Получаем элемент с классом .cursor
var cursor = document.querySelector(".cursor");
  
  // Функция для перемещения элемента за мышью
  function moveCursor(e) {
    // Получаем координаты мыши
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    
    // Перемещаем элемент с помощью свойства transform
    // Отнимаем половину размера элемента для центрирования
    cursor.style.transform = "translate(" + (mouseX - 15) + "px," + (mouseY - 15) + "px)";
    
  }
  
  // Добавляем обработчик события mousemove для всего документа
  document.addEventListener("mousemove", moveCursor);


export default {
    data() {
        return {
            drawer: false,
            links: [
                { title: "About Us", icon: "mdi-information", url: "/about" },
                { title: "Cars", icon: "mdi-car", url: "/cars" },
                { title: "Orders", icon: "mdi-bookmark-multiple-outline", url: "/orders" },
                { title: "Log In", icon: "mdi-login", url: "/login" },
            ]
        }
    }
}
</script>

<template>
  <v-app >
  <v-navigation-drawer app v-model="drawer">
    <v-list-item-title class="title">BMW</v-list-item-title><v-list-item-subtitle>Epitome of style and speed!</v-list-item-subtitle>
    <v-list-item
v-for="link in links"
:key="link.title"
:to="link.url"
>
<template v-slot:prepend>
<v-icon :icon="link.icon"></v-icon>
</template>
<v-list-item-title>{{ link.title }}</v-list-item-title>
</v-list-item>
</v-navigation-drawer>
<v-app-bar app dark color="primary">
<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
<v-spacer></v-spacer>
<v-toolbar-items class="hidden-sm-and-down">
  <v-btn
v-for="link in links"
:key="link.title"
:to="link.url"
>
<v-icon
start
:icon="link.icon"
></v-icon>
{{ link.title }}
</v-btn>
</v-toolbar-items>
</v-app-bar>
<v-main>
<router-view></router-view>
</v-main>
</v-app>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
.cursor {
    position: fixed; /* Позиция по отношению к окну */
    top: 0; /* Начальное положение сверху */
    left: 0; /* Начальное положение слева */
    width: 30px; /* Ширина кружочка */
    height: 30px; /* Высота кружочка */
    border-radius: 50%; /* Форма кружочка */
    background-color: red; /* Цвет кружочка */
    opacity: 0.5; /* Прозрачность кружочка */
    cursor: none; /* Скрытие стандартного курсора */
    pointer-events: none; /* Игнорирование кликов по кружочку */
  }
</style>