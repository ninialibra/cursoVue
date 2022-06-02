import { createStore } from 'vuex';
import getRandomInt from "../helpers/getRandomInt";

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false
    },
    mutations: { //siempre sincronas. con los commit de mutaciones se cambia el state directamente
        increment(state) {
            state.count++;
            state.lastMutation = 'increment';
        },
        incrementBy(state, val) {
            state.count += val;
            state.lastMutation = 'incrementby ' + val;
        },
        setLoading(state, estado) {
            state.isLoading = estado;
        }
    },
    actions: { //pueden ser asincronas. la accion cambia el state con una mutacion. se llaman con dispatch
        async incrementRandomInt({ commit }) {
            commit('setLoading', true);

            const randomInt = await getRandomInt();
            commit('incrementBy', randomInt);

            commit('setLoading', false);

        }
    }

})