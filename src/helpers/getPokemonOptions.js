/* const getPokemons = ()=> {
    const pokemonsArray = Array.from (Array(650))
    console.log(pokemonsArray)
    return pokemonsArray.map((_, index) => index+1)
}
*/

const randomPoke = () => {
  let randomPokemons = [];

  while (randomPokemons.length < 4) {
    let num = Math.trunc(Math.random() * 650);
    if (!randomPokemons.includes(num)) {
      randomPokemons.push(num + 1);
    }
  }
  return randomPokemons;
};

export const getPokemonOptions = () => {
  const [a, b, c, d] = randomPoke();
  console.log(a, b, c, d);
  //getPokemons()
};
