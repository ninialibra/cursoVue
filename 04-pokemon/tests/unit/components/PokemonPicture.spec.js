import { shallowMount } from "@vue/test-utils";
import PokemonPicture from '@/components/PokemonPicture';

describe('pokemonPicture component', () => {
    test('debe hacer match con el snapshpt', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe mostrar imagen oculta y pokemon 100', () => {

    });

    test('debe mostrar el pokemon si showPokemon:true', () => {

    });
});