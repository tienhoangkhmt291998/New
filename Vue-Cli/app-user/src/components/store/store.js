import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        result: 0,
        name: "Tomosia"
    },
    getters: {
        nameResult: state => {
            return state.result * 10  +  state.name;
        }
    }
})