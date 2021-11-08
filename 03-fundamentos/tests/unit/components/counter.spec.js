import { shallowMount, mount } from "@vue/test-utils";
import Counter from '@/components/Counter';

describe('Counter component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    /*test('debe hacer march con snapshot', () => {

        const wrapper = shallowMount(Counter);
        expect(wrapper.html()).toMatchSnapshot();
    })*/

    test('h2 valor por defecto Counter ', () => {

        const h2 = wrapper.find('h2');

        expect(h2.text()).toBe('Counter');

    });

    test('el valor por defecto debe ser 100', () => {

        /*const pTags = wrapper.findAll('p');
        expect(pTags[1].text().toBe('100'))*/

        const value = wrapper.find('[data-testid="counter"]').text();
        expect(value).toBe('100');
    });

    test('Debe incrementar en 1 el counter', async() => {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const value = wrapper.find('[data-testid="counter"]').text();

        expect(value).toBe('101');
    });

    test('Debe de establecer el valor por defecto', () => {
        const start = wrapper.props('start');
        const value = wrapper.find('[data-testid="counter"]').text();
        expect(Number(value)).toBe(start);
    });

    test('Debe mostrar la prop title', () => {
        const title = 'Hola Mundo';
        const wrapper = shallowMount(Counter, {
            props: {
                title: title
            }
        });

        expect(wrapper.find('h2').text()).toBe(title);
    });
})