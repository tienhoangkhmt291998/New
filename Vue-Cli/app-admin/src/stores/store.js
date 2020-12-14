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
        change_title:"",
        userId: 0
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
            let arr = this.state.arr;

            let x = Number(this.state.userId)

            console.log(typeof x);

            for (let i = 0; i < arr.length; i++) {

                if (x === this.state.arr[i].id) {

                    arr[i].title = this.state.title;
                    console.log(arr[i].title)
                }
            }

        }
    },

})