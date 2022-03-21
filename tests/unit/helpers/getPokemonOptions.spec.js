import { randomPoke, getPokemonOptions } from "@/helpers/getPokemonOptions";

// add function to check that array is unique.
// Set only works once
const isArrayUnique = (arr) =>
  Array.isArray(arr) && new Set(arr).size === arr.length;

describe("getPokemonOptions helpers", () => {
  test("debe de regresar un arreglo con 4 numeros aleatorios", () => {
    const randomValues = randomPoke();
    console.log(randomValues);

    expect(isArrayUnique(randomValues)).toBeTruthy();
    expect(randomValues);
  });

  test("debe de regresar un arreglo con 4 pokemons", async () => {
    const pokemons = await getPokemonOptions();

    //console.log(pokemons);

    expect(pokemons.length).toBe(4);

    //to be no porq al ser objetos const apuntan a diferente espacio en memoria
    expect(pokemons).toEqual([
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
      { id: expect.any(Number), name: expect.any(String) },
    ]);
  });
});
