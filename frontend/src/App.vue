
<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                { title: "About Us", icon: "mdi-information", url: "/about" },
                { title: "Cars", icon: "mdi-car", url: "/cars" },
                { title: "Orders", icon: "mdi-bookmark-multiple-outline", url: "/orders" },
                { title: "Log In", icon: "mdi-login", url: "/login" },
                { title: "Registration", icon: "mdi-face", url: "/registration" },
            ]
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
      <v-toolbar-title class="headline">BMW - Ultimate Driving Experience</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" class="mr-4">
          <v-icon left>mdi-home</v-icon>Home
        </v-btn>
        <v-btn to="/about" class="mr-4">
          <v-icon left>mdi-information</v-icon>About Us
        </v-btn>
        <v-btn to="/list" class="mr-4">
          <v-icon left>mdi-car</v-icon>Cars
        </v-btn>
        <v-btn to="/orders" class="mr-4">
          <v-icon left>mdi-bookmark-multiple-outline</v-icon>Orders
        </v-btn>
        <v-btn to="/login" class="mr-4">
          <v-icon left>mdi-login</v-icon>Log In
        </v-btn>
        <v-btn to="/registration">
          <v-icon left>mdi-face</v-icon>Sign In
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