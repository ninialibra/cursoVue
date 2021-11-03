import { shallowMount, mount } from "@vue/test-utils";
import Counter from '@/components/Counter';

describe('Counter component', () => {
    /*test('debe hacer march con snapshot', () => {

        const wrapper = shallowMount(Counter);
        expect(wrapper.html()).toMatchSnapshot();
    })*/

    test('h2 valor por defecto Counter ', () => {
        const wrapper = shallowMount(Counter);

        const h2 = wrapper.find('h2');

        expect(h2.text()).toBe('Counter');

    });

    test('el valor por defecto debe ser 100', () => {
        const wrapper = shallowMount(Counter);

        /*const pTags = wrapper.findAll('p');
        expect(pTags[1].text().toBe('100'))*/

        const value = wrapper.find('[data-testid="counter"]').text();
        expect(value).toBe('100');
    });
})