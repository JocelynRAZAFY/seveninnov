import Vue from 'vue'
import Vuex from 'vuex'
import ExoModule from './exo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        exo: ExoModule
    }
})
