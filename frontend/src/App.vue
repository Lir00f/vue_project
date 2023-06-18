
<script>
  export default {
  data() {
  return {
  drawer: false,
  }
  
  },
  computed: {
    error () {
      return this.$store.getters.error
   },
   isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
},
links(){
if (this.isUserLoggedIn) {
return [
{title:"Пользователи",icon:"mdi-bookmark-multiple-outline", url:"/orders"},
{title:"Новинки", icon:"mdi-note-plus-outline", url:"/new"},
{title:"Корзина", icon:"mdi-view-list-outline", url:"/list"}
]
} else {
return [
{title:"Войти", icon:"mdi-lock", url:"/login"},
{title:"Зарегистрироваться",icon:"mdi-face",url:"/registration"},
]
}
}


},
methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
this.$store.dispatch('logoutUser')
this.$router.push("/")
}

 }

  }
  </script>

<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          @click="drawer = false"
        >
          <v-icon :icon="link.icon"></v-icon>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
  <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  <v-toolbar-title>
    <v-btn to="/">
  НА ГЛАВНУЮ
  </v-btn>
  </v-toolbar-title>
  
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
<v-btn @click="onLogout"
v-if="isUserLoggedIn">
<v-icon
start
icon="mdi-exit-to-app"
></v-icon>
Выйти
</v-btn>
  </v-toolbar-items>
  
  </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar
v-model="error"
multi-line
:timeout="2000"
color="primary"
>
{{ error }}
<template v-slot:actions>
<v-btn
variant="text"
@click="closeError"
>
Close
</v-btn>
</template>
</v-snackbar>
  </v-app>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}

.headline {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2vh;
}

.v-app-bar {
  background-color: rgb(123, 85, 237); /* Цвет фона хэддера */
  box-shadow: none;
}

.v-app-bar .v-btn {
  color: #ffffff; /* Цвет текста кнопок */
}

.v-app-bar .v-btn:hover {
  color: #e1e1e1; /* Цвет текста кнопок при наведении */
}

.v-navigation-drawer .v-list-item-title {
  color: #000000; /* Цвет текста ссылок в навигационном ящике */
}

.v-app-bar {
  background-color: #1976d2; /* Цвет фона хэддера */
  box-shadow: none;
}

.v-app-bar .v-btn {
  color: #ffffff; /* Цвет текста кнопок */
}

.v-app-bar .v-btn:hover {
  color: #e1e1e1; /* Цвет текста кнопок при наведении */
}

.v-navigation-drawer .v-list-item-title {
  color: #000000; /* Цвет текста ссылок в навигационном ящике */
}

</style>