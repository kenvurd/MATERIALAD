export default{
    state: {
        error: null,
        loading: false
    },
    mutations: {
        setError(state, payload) {
            state.error = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        clearError(state) {
            state.error = null
        },
    },
    actions: {
        setError({commit}, payload) {
            commit('setError', payload)
        },
        setLoading({commit}, payload) {
            commit('setLoading', payload)
        },
        clearError({commit}) {
            commit('clearError')
        },
    },
    getters: {
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        }      
    }
}