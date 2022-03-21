<template>
  <div v-if="!pokemon">
    <h1>Espere por favor..</h1>
  </div>
  <div v-else>
    <PokemonImage :pokemonId="this.pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemonList="pokemonList"
      @selectPokemon="pokemonSelected"
    />
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="resetGame">Reset</button>
    </template>
  </div>
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { getPokemonOptions } from "@/helpers/getPokemonOptions";
export default {
  data() {
    return {
      pokemonList: [],
      pokemon: null,
      showPokemon: false,
      message: null,
      showAnswer: false,
    };
  },
  components: {
    PokemonImage,
    PokemonOptions,
  },
  mounted() {
    this.getPoke();
  },
  methods: {
    async getPoke() {
      this.pokemonList = await getPokemonOptions();
      const randomInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonList[randomInt];
    },
    pokemonSelected(pokeId) {
      //el $event tiene el valor del evento, puede ser (param1, param2, $event)
      this.showPokemon = true;
      this.showAnswer = true
      console.log(pokeId);

      if (pokeId == this.pokemon.id) {
        this.message = `Correcto, el pokemon era ${this.pokemon.name}`;
      } else {
        this.message = `Ops, el pokemon era ${this.pokemon.name}`;
      }
    },
    resetGame() {
      this.pokemonList = [];
      this.pokemon = null;
      this.showPokemon = false;
      this.message = null;
      this.showAnswer = false,

      this.getPoke()
    },
  },
};
</script>

<style></style>
