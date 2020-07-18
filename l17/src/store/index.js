import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        nickname: "Ivan",
        userList: [
            { name: 'aaa', gender: 0 },
            { name: 'bbb', gender: 1 },
            { name: 'cccc', gender: 1 },
            { name: 'dddd', gender: 0 }
        ]
    },
    mutations: {
        setnickname(state, val) {
            state.nickname = val
        }
    },
    getters: {
        female: state => {
            return state.userList.filter(r => r.gender)
        },
        male: state => {
            return state.userList.filter(r => !r.gender)
        }
    },
    actions: {

    },
    modules: {

    }
})

export default store