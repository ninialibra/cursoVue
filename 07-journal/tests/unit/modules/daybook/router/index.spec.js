import daybookRouter from "@/modules/daybook/router";

describe('pruebas en router module daybook', () => {
    test('el router debe tener esta configuracion', async() => {
        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [{
                    path: '',
                    name: 'no-entry',
                    component: expect.any(Function)
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any(Function),
                    props: expect.any(Function)
                }
            ]
        });

        expect((await daybookRouter.children[0].component()).default.name)

    });
});