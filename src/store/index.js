import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    carList : []
}

const store = new Vuex.Store({
    state,
    mutations : {
        addCart(state,payload){
            state.carList.push(payload)
        }
    }
});

export default store
