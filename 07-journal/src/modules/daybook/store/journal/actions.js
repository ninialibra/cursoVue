//acciones asincronas que pueden llamar una mutacion

import journalApi from "../../../../api/journalApi"

export const loadEntries = async({ commit }) => {

    const { data } = await journalApi.get('/entries.json')
    const entries = []

    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}

export const updateEntry = async({ commit }, entry) => {

    //console.log(entry);
    const { date, picture, text } = entry;
    const dataToSave = { date, picture, text };
    await journalApi.put(`/entries/${entry.id}.json`, dataToSave)

    commit('updateEntry', {...entry }) //para evitar que se pase por referencia
}

export const createEntry = async( /*{ commit }*/ ) => {

}