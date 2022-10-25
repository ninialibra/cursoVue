import { shallowMount } from '@vue/test-utils'
import Fab from "@/modules/daybook/components/Fab.vue";

describe('Pruebas en fab component', () => {
    test('debe mostrar icono por defecto', () => {
        const wrapper = shallowMount(Fab)
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-plus')).toBeTruthy()
    })

    test('debe mostrar icono por argumento', () => {
        const wrapper = shallowMount(Fab, {
            props: {
                icon: 'fa-circle'
            }
        })
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-circle')).toBeTruthy()
    });

    test('debe emitir on:clic cuando se hace clic', () => {
        const wrapper = shallowMount(Fab)
        wrapper.find('button').trigger('click')

        expect(wrapper.emitted('on:click')).toHaveLength(1);

    });
})