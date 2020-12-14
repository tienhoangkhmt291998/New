import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        search:'',
        id:0,
        title:"",
        btn_new:true,
        arr:[],
        loading:true,
        text:"tomosia"
    },
    actions: {
        loadData({
                     commit
                 }) {
            axios.get("https://jsonplaceholder.typicode.com/todos")
                .then(res => {
                    commit('updateArr', res.data)
                    commit('changeLoadingState', false)
                })
        },
        handleSave ({
                  commit
        }) {
            commit('handleAdd')
        }
    },
    mutations: {
        updateArr(state, arr) {
            state.arr = arr
        },
        changeLoadingState(state, loading) {
            state.loading = loading
        },
        handleAdd () {

            console.log(this.state.text)

        }
    },

})