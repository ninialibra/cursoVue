import { shallowMount, mount } from "@vue/test-utils";
import Indecision from "@/components/Indecision";

describe('Indecision app', () => {
    let wrapper;
    let clgSpy;

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }));

    beforeEach(() => {
        wrapper = shallowMount(Indecision);

        clgSpy = jest.spyOn(console, 'log');

        jest.clearAllMocks();
    });

    test('debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('escribir input no disparar nada', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        const input = wrapper.find('input');
        await input.setValue('Hola Mundo');

        expect(clgSpy).toHaveBeenCalled();
        expect(getAnswerSpy).toHaveReturnedTimes(0);
    });

    test('escribir ? debe disparar el getAnswer', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        const input = wrapper.find('input');
        await input.setValue('Funciona?');

        expect(getAnswerSpy).toHaveReturnedTimes(1);
    });

    test('pruebas en getAnswer', async() => {
        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');

        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif');
        expect(wrapper.vm.answer).toBe('Sí!');

    });

    test('pruebas en getAnswer - fallo en el API', async() => {

        fetch.mockImplementationOnce(() => Promise.reject('API is down'));

        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');
        expect(img.exists()).toBeFalsy();

        expect(wrapper.vm.answer).toBe('No se pudo cargar del API');

    });
});