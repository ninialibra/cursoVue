import pokemonApi from '@/api/pokemonApi';


describe('pokemonApi', () => {
    test('axios debe de estar configurado con api pokemon', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
    });
});