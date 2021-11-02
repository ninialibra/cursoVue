describe('ejemplo', () => {

    test('Debe de ser mayor a 10', () => {
        let value = 5;

        value = value + 2;

        if (value > 10) {

        } else {
            throw `${value} no es mayor a 10`;
        }
    });

});