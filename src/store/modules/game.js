import { getGame, getHotGames, getBestGames } from '@/api/game'

const state = {
  hotGames: [],
  bestGames: []
}

const getters = {
  hotGames: state => state.hotGames,
  bestGames: state => state.bestGames
}

const actions = {
  getGame ({commit, state}, id) {
    return getGame(id)
  },
  getHotGames ({commit, state}) {
    return getHotGames().then((response) => {
      commit('setHotGames', response.data)
    })
  },
  getBestGames ({commit, state}) {
    return getBestGames().then((response) => {
      commit('setBestGames', response.data)
    })
  }
}

const mutations = {
  setHotGames (state, hotGames) {
    state.hotGames = hotGames
  },
  setBestGames (state, bestGames) {
    state.bestGames = bestGames
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
