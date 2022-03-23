import PokemonPage from "@/pages/PokemonPage";
import { mount, shallowMount } from "@vue/test-utils";
import { mockPokemons } from "../mocks/pokemons.mock";

describe("Test PokemonPage", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("debe de hacer match con el snapshot", () => {
    //No ayuda mucho porq solo se renderiza el v-if
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de llamar el metodo del mounted", () => {
    const getPoke = jest.spyOn(PokemonPage.methods, "getPoke");
    //Tiene que antes montarse el componente despues del spy
    const wrapper = shallowMount(PokemonPage);

    console.log(wrapper);
    expect(getPoke).toHaveBeenCalled();
  });

  test("debe de hacer match con el snapshot uego de cargar los pokemons", () => {
    //el shallowMount hace un mount suave sin entrar a los componentes internos, en lugar de eso les coloca una etiqueta stub

    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonList: mockPokemons,
          pokemon: mockPokemons[0],
          showPokemon: false,
          message: null,
          showAnswer: false,
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
