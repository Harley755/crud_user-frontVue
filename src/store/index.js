import { createStore } from "vuex";
import axios from "axios";



const store = createStore({
    state: {
        users: {},
        user: {},
    },

    mutations: {
        getAllUsers(state, data) {
            state.users = data;
            console.log('state.users: ',  state.users);
        },
        
        showUser(state, data) {
            state.user = data;
            console.log('state.user: ',  state.user);
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
        },

        showUser({ commit }, params) {
            axios.get(`http://127.0.0.1:8000/api/users/${params}`)
                .then(response => {
                    console.log('show User from action : ',response.data);
                    commit('showUser', response.data);
                })
                .catch((error) => console.error(error))
        },

        createUser({ commit }, data) {
            console.log('data: ', data);
            axios.post('http://127.0.0.1:8000/api/users/', data)
                .then(response => {
                    console.log('create User from action : ', response.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
});

export default store;