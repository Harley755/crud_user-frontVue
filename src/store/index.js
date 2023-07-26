import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        users: {},
    },

    mutations: {
        getAllUsers(state, data) {
            state.users = data;
            console.log('state.users: ',  state.users);
        }
    },

    actions: {
        getAllUsers({ commit }) {
            axios.get('http://127.0.0.1:8000/api/users/')
                .then(response => {
                    console.log('Users from action : ',response.data);
                    commit('getAllUsers', response.data);
                })
                .catch((error) => console.error(error))
        }
    },
});

export default store;