<template>
  <v-container class="pt-9">
    <v-card class="rounded-xl mt-9">
      <v-row v-if="pokemon">
        <v-col cols="6">
          <v-img :src="pokemon.image" aspect-ratio="1" width="70%" class="mx-auto" />
        </v-col>
        <v-col cols="6">
          <v-container fluid class="mt-5">
          <!-- Simple stats -->
            <v-row>
              <v-col cols="2" class="text-caption px-1"><span class="font-weight-bold tw-uppercase">Atk: </span> {{ pokemon.base_stats.bs_atk }}</v-col>
              <v-col cols="2" class="text-caption px-1"><span class="font-weight-bold tw-uppercase">Def: </span> {{ pokemon.base_stats.bs_def }}</v-col>
              <v-col cols="2" class="text-caption px-1"><span class="font-weight-bold tw-uppercase">Hp: </span> {{ pokemon.base_stats.bs_hp }}</v-col>
              <v-col cols="2" class="text-caption px-1"><span class="font-weight-bold tw-uppercase">Sp Atk: </span> {{ pokemon.base_stats.bs_sp_atk }}</v-col>
              <v-col cols="2" class="text-caption px-1"><span class="font-weight-bold tw-uppercase">Sp Def: </span> {{ pokemon.base_stats.bs_sp_def }}</v-col>
              <v-col cols="2" class="text-caption px-1"><span class="font-weight-bold tw-uppercase">Speed: </span> {{ pokemon.base_stats.bs_speed }}</v-col>
            </v-row>
            <!-- All other stats except habitat description -->
            <v-row class="my-7">
              <v-col cols="6">
                <v-row class="my-2"><span class="font-weight-bold tw-uppercase">Name: </span> <span class="ml-2">{{ pokemon.name }}</span></v-row>
                <v-row class="my-2"><span class="font-weight-bold tw-uppercase">Height: </span> <span class="ml-2">{{ getPokemonHeight }}</span></v-row>
                <v-row class="my-2"><span class="font-weight-bold tw-uppercase">Habitat: </span> <span class="ml-2">{{ pokemon.habitat.habitat_name }}</span></v-row>
              </v-col>
              <v-col cols="6">
                <v-row class="my-2"><span class="font-weight-bold tw-uppercase">ID: </span> <span class="ml-2">{{ pokemon.id }}</span></v-row>
                <v-row class="my-2"><span class="font-weight-bold tw-uppercase">Weight: </span> <span class="ml-2">{{ pokemon.weight + ' Kg'}}</span></v-row>
                <v-row class="my-2">
                  <div>
                    <span class="font-weight-bold tw-uppercase">{{ pokemon.habitat.length > 1 ? 'Types' : 'Type' }}: </span>
                    <span v-for="item in pokemon.types" :key="'pokemon-type-' + item.type_name" class="mx-2">{{ item.type_name }}</span>
                  </div> 
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="pl-0">
                <p class="text-justify pr-4">
                  <span class="font-weight-bold tw-uppercase">Habitat description: </span>
                  {{ pokemon.habitat.habitat_description }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    pokemon: null,
  }),
  mounted () {
    axios.get('http://localhost:8000/api/v1/pokemons/' + this.$route.params.pokemonId)
      .then(res => this.pokemon = res.data.data);
  },
  computed: {
    getPokemonHeight() {
      return this.pokemon.height < 10 ? this.pokemon.height + '0 cm' : this.pokemon.height + 'm'
    }
  }
}
</script>

<style>
</style>