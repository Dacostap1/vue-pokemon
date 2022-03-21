import { shallowMount } from "@vue/test-utils";
import PokemonImage from "@/components/PokemonImage";

describe("PokemonPicture component", () => {
  test("debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });
    //console.log(wrapper);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de mostrar la imagen oculta y el pokemon 1", () => {
    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });

    const [img1, img2] = wrapper.findAll("img");

    // console.log(img1.classes("hidden-pokemon"));
    // console.log(img2);

    expect(img1.classes("hidden-pokemon")).toBeTruthy();
    expect(img2).toBe(undefined);
  });

  test("debe de mostrar el pokemon si showPokemon: true", () => {
    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 1,
        showPokemon: true,
      },
    });

    const [img1, img2] = wrapper.findAll("img");

    // console.log(img1.classes("hidden-pokemon"));
    // console.log(img2);

    expect(img1.classes("hidden-pokemon")).toBeTruthy();
    expect(img2.classes("fade-in")).toBeTruthy();

    expect(img1.attributes("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    );
  });
});
