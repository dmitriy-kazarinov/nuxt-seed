import Vuex from 'vuex'

// import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 1,
      users: [
        {
          id: 223443,
          name: 'Johnny Agent'
        },
        {
          id: 8678530,
          name: 'James A. Rosen'
        }
      ]
    },
    mutations: {
      setUsers (state, users) {
        state.users = users
      },
      incrementCounter (state) {
        state.counter += 1
      }
    }
  })
}

export default createStore
