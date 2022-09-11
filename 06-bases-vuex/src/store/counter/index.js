import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";


const counterStore = {
    namespaced: true,
    state,
    mutations,
    actions, //pueden ser asincronas. la accion cambia el state con una mutacion. se llaman con dispatch
    getters
}

export default counterStore;