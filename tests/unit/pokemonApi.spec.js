import pokemonApi from "@/api/pokemonApi";

describe("pokemonApi", () => {
  test("axios works with baseUrl", () => {
    console.log(pokemonApi);

    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
