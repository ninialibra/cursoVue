import { shallowMount } from '@vue/test-utils'
import Home from "@/views/Home.vue";

describe('Pruebas en home view', () => {
    test('debe renderizar correctamente el componente', () => {
        const wrapper = shallowMount(Home)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('hacer clic en un boton debe enviar a no-entry', () => {
        const mockRouter = {
            push: jest.fn()
        }

        const wrapper = shallowMount(Home, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')
        expect(mockRouter.push).toHaveBeenCalled()
        expect(mockRouter.push).toHaveBeenCalledWith({ name: 'no-entry' })
    });
})