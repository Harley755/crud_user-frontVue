import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state: {
        count: 0,
        colorCode: 'blue'
    },

    mutations: {
        increaseCount (state, randomNumber) {
            console.log('randomNumber: ', randomNumber);
            state.count += randomNumber;
        },
        decreaseCount (state, randomNumber) {
            console.log('randomNumber: ', randomNumber);
            state.count -= randomNumber;
        },
        setColorCode(state, color) {
            state.colorCode = color; 
        }
    },
    
    actions: {
        decreaseCount ({ commit }) {
            console.log('Increase from action');
            axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
                .then(response => {
                    console.log('response : ', response.data);
                    commit('decreaseCount', response.data)
                })
                .catch((err) => console.log(err));
        },
        increaseCount ({ commit }) {
            console.log('Increase from action');
            axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
                .then(response => {
                    console.log('response : ', response.data);
                    commit('increaseCount', response.data)
                })
                .catch((err) => console.log(err));
        },
        setColorCode({ commit }, newValue) {
            commit('setColorCode', newValue)
        }
    },

    getters: {
        getCount(state) {
            return state.count * state.count;
        }
    },

    modules: {

    }
})

export default store;