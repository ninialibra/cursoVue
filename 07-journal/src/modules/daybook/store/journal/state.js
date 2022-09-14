//es reactivo y cuando se modifique se van a enterar todos los componentes
export default () => ({
    isLoading: true,
    entries: [{
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Eiusmod consequat cupidatat enim officia deserunt duis enim amet esse et. In sunt irure elit dolor veniam consequat. Proident in cupidatat anim labore nisi reprehenderit. Enim eu commodo qui reprehenderit aute.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Eiusmod officia duis laboris amet consequat nisi nostrud consequat in voluptate magna reprehenderit anim. In voluptate irure nisi ad cupidatat adipisicing eiusmod elit dolore aute laboris et ex eu. Ad ullamco commodo Lorem esse deserunt excepteur nisi sint incididunt irure veniam ex laborum. Ea tempor adipisicing sunt amet qui esse voluptate consequat labore cillum et labore commodo consectetur. Reprehenderit ad fugiat qui aliqua culpa officia Lorem nulla qui.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Nulla nulla minim qui laboris do pariatur incididunt occaecat non laborum ut enim incididunt esse. Non ex id culpa tempor reprehenderit eu proident qui. Do laborum nisi et nisi dolor. Esse dolore dolor esse proident cillum incididunt voluptate esse culpa ullamco. Eu mollit in cillum id veniam cupidatat anim voluptate reprehenderit ex.',
            picture: null
        }
    ]
})