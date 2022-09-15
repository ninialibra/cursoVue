//son para traer informacion del state
export const getEntriesByTerm = (state) => (term = '') => {

    if (term.length === 0) return state.entries;

    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()));
}

export const getEntryById = (state) => (id = '') => {

    //se hace con la constante porq si no se devolvería el valor por referencia y nunca se debe alterar el state a no ser por mutaciones
    const entry = state.entries.find(entry => entry.id === id)

    if (!entry) return

    return {...entry }
}