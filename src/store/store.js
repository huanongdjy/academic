import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    searchResult: []
  },
  getters: {
    getSearchResult (state) {
      state.searchResult = sessionStorage.getItem('searchResult')
      console.log('session: ' + state.searchResult)
      return state.searchResult
    }
  },
  mutations: {
    setSearchResult (state, s) {
      state.searchResult = []
      s.array.forEach(element => {
        state.searchResult.push(element)
      })
      // state.searchResult = s
      sessionStorage.setItem('searchResult', state.searchResult)
    }
  },
  actions: {
  }
})
