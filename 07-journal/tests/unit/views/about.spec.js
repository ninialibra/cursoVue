import { shallowMount } from '@vue/test-utils'
import About from "@/views/About.vue";

describe('Pruebas en about view', () => {
    test('debe renderizar correctamente el componente', () => {
        const wrapper = shallowMount(About)
        expect(wrapper.html()).toMatchSnapshot()
    })
})