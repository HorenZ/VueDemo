export default {
    namespaced: true,
    state: {
        firstName: '张',
        lastName: '三',
        age: 2,
        typelist: []
    },
    getters: {
        fullName({ firstName, lastName }) {
            return firstName + lastName
        }
    },
    mutations: {
        setAge(state, payload) {
            state.age = payload
        },
        setTypelist(state, payload) {
            state.typelist = payload
        }
    },
    actions: {
        async getUserAge({ commit }) {
            let res = await fetch('https://www.fastmock.site/mock/43113d5611bc46143016503cd551308b/demo/typelist').then(res => res.json())
            commit('setTypelist', res.typelist)
            return res
        }
    }
}