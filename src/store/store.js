import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    searchResult: '',
    infoData: {}
  },
  getters: {
    getSearchResult (state) {
      state.searchResult = sessionStorage.getItem('searchResult')
      // console.log('session: ' + state.searchResult)
      return state.searchResult
    },
    getInfoData (state) {
      state.infoData = sessionStorage.getItem('infoData')
      return state.infoData
    }
  },
  mutations: {
    setSearchResult (state, s) {
      state.searchResult = s
      sessionStorage.setItem('searchResult', state.searchResult)
    },
    setInfoData (state, newinfoData) {
      state.infoData = newinfoData
      sessionStorage.setItem('infoData', state.infoData)
    }
  },
  actions: {
  }
})
