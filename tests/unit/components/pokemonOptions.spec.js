import { shallowMount } from "@vue/test-utils";
import pokemonOptionsComponent from "@/components/PokemonOptions";
import { mockPokemons } from "../mocks/pokemons.mock";

describe("test in pokemonOptionsComponent", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(pokemonOptionsComponent, {
      props: {
        pokemonList: mockPokemons,
      },
    });
  });

  test("debe hacer match con el snapshot", () => {
    console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de mostrar las 4 opciones correctamente", () => {
    const liTags = wrapper.findAll("li");
    expect(liTags.length).toBe(4);

    expect(liTags[0].text()).toBe("pikachu");
    expect(liTags[1].text()).toBe("charmander");
    expect(liTags[2].text()).toBe("venusaur");
    expect(liTags[3].text()).toBe("new");
  });

  test("debe $emitir el evento al hacer click en el li", () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");

    li1.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");

    expect(wrapper.emitted("selectPokemon").length).toBe(4);
    expect(wrapper.emitted("selectPokemon")[0]).toEqual([5]);
    expect(wrapper.emitted("selectPokemon")[1]).toEqual([10]);
    expect(wrapper.emitted("selectPokemon")[2]).toEqual([15]);
    expect(wrapper.emitted("selectPokemon")[3]).toEqual([20]);
  });
});
