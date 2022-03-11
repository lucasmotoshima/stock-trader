import stocks from '../../data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
            })
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit('buyStock', order)
            localStorage.setItem('salvo', false)
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)
            localStorage.getItem('salvo')
        },
        randomizeStocks({ commit }) {
            commit('randomizeStocks')
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}