import pokemonApi from "@/api/pokemonApi";

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

export const getPokemonOptions = async () => {
  const [a, b, c, d] = randomPoke();

  
  console.log(a, b, c, d);

  const promiseArray = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ]
  const res = await Promise.all(promiseArray)

  return res.map( (r) => ({
    id: r.data.id,
    name: r.data.name,
  }))

 
};
