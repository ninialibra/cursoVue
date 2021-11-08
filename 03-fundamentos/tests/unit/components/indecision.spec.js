const { shallowMount } = require("@vue/test-utils");
import { Indecision } from "@/components/Indecision.vue";

describe('', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Indecision);
    });

    test('debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('escribir input no disparar nada', () => {

    });

    test('escribir ? debe disparar el fetch', () => {

    });

    test('pruebas en getAnswer', () => {

    });

    test('pruebas en getAnswer - fallo en el API', () => {

    });
})