<template>
  <PokemonPage/>  
  <PokemonImage :pokemonId="23" :showPokemon="false"/>
  <PokemonOptions/>
</template>

<script>
import PokemonImage from './components/PokemonImage.vue'
import PokemonPage from './pages/PokemonPage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import { getPokemonOptions } from '@/helpers/getPokemonOptions'
console.log(getPokemonOptions())


export default {
  name: 'App',
  components: {
    PokemonPage,
    PokemonImage,
    PokemonOptions
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
