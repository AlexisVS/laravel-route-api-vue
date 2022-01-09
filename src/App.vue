<template>
  <v-app id="inspire">
    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in navigations" :key="'page-' + item.text" :to="item.link">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link class="white--text" to="/">Laravel Route API project</router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.fullPath"/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      drawer: false,
      navigations: [
        {
          text: 'Home',
          link: '/',
        },
        {
          text: 'Pokedex',
          link: '/pokedex',
        },
      ],
    };
  }
}
</script>

<style>
*, *:hover, *:focus, *:active {
  cursor: url('/gam1284.cur'), pointer;
}
</style>