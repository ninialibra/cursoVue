import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage';
import { mock_pokemons } from "../mocks/pokemons.mock";

describe('PokemonPage Componen', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage);
    });

    test('debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe de llamar mixPokemonArr al montar', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');
        shallowMount(PokemonPage);

        expect(mixPokemonArraySpy).toHaveBeenCalled();
    });

    test('debe de hacer match con el snapshot cuando cargan pokemons', () => {

        //el mount monta el snapshot al 100% con todo el ciclo de vida de los componentes
        const wrapper = mount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mock_pokemons,
                    pokemon: mock_pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                };
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe de mostrar los componentes de picture y options', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mock_pokemons,
                    pokemon: mock_pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                };
            }
        });

        const picture = wrapper.find('pokemon-picture-stub');
        const options = wrapper.find('pokemon-options-stub');

        expect(picture.exists()).toBeTruthy();
        expect(options.exists()).toBeTruthy();

        expect(picture.attributes('pokemonid')).toBe('1');
        expect(options.attributes('pokemons')).toBeTruthy();
    });

    test('pruebas con checkanswer', async() => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mock_pokemons,
                    pokemon: mock_pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                };
            }
        });

        await wrapper.vm.checkAnswer(1);

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBe(true);
        expect(wrapper.find('h2').text()).toBe(`Correcto, ${mock_pokemons[0].name}!`);

        await wrapper.vm.checkAnswer(10);
        expect(wrapper.vm.message).toBe(`Ups! Era ${mock_pokemons[0].name}`);

    });
});