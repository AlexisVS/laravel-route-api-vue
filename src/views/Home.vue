<template>
  <v-container>
    <!-- Pokemon grid -->
    <v-container fluid>
      <v-row>
        <v-col cols="4" lg="3" v-for="item in pokemons" :key="'pokemonId-' + item.id">
          <v-hover v-slot="{ hover }">
            <v-card elevation="4" class="rounded-xl pa-5 mx-auto" ripple>
              <v-img
                aspect-ratio="1"
                contain
                class="justify-center align-center"
                height="220"
                :src="'http://localhost:8000/img/pokemon/' + item.image"
              >
              </v-img>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="black">
                    <v-card-title
                      class="justify-center text-h6 font-weight-bold"
                    >{{ item.name }}</v-card-title>
                  </v-overlay>
                </v-fade-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    pokemons: null,
  }),
  mounted () {
    axios
      .get('http://localhost:8000/api/v1/pokemon')
      .then(res => this.pokemons = res.data.data)
      .then(err => console.log(err));
  },
}
</script>

<style>
</style>