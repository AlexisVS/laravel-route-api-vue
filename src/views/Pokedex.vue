<template>
  <v-container>
    <!-- Pokemon grid -->
    <v-container fluid>
      <v-row v-if="loadedStatus == false">
        <v-col cols="4" lg="3" v-for="n in 30" :key="'skeleton-' + n">
          <v-skeleton-loader loading :transition="transition" type="image" class="rounded-xl" />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="4" lg="3" v-for="item in pokemons" :key="'pokemonId-' + item.id">
          <v-hover v-slot="{ hover }">
            <v-card
              elevation="4"
              class="rounded-xl pa-3 mx-auto"
              ripple
              :to="'/pokedex/pokemon/' + item.id"
            >
              <v-img
                aspect-ratio="1"
                contain
                class="justify-center align-center"
                height="176"
                :src="item.image"
              ></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="black">
                  <v-card-title class="justify-center text-h6 font-weight-bold">{{ item.name }}</v-card-title>
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
  name: 'Pokedex',
  components: {
  },
  data: () => ({
    pokemons: null,
    loadedStatus: false,
    transition: 'scale-transition',
  }),
  mounted () {
    axios
      .get('http://localhost:8000/api/v1/pokemons')
      .then(res => { this.loadedStatus = true; this.pokemons = res.data.data });
  },
}
</script>

<style scoped lang="scss">
$skeleton-loader-image-height: 262;
</style>