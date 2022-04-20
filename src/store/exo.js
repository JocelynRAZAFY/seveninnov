import ExoApi from '../api/exoApi'
export default {
    namespaced: true,
    state:{
        items: [],
        occurrence: null
    },
    mutations: {
        setItems(state,items){
            state.items = items
        },
        setOccurrence(state,occurrence){
            state.occurrence = occurrence
        }
    },
    actions:{
        async exoAction(context){
            const res = await ExoApi.getApi()
            context.commit('setItems',res.data)
        },
        async occurenceAction(context){
            const res = await ExoApi.getOccurrence()
            context.commit('setOccurrence',res.data)
        }
    }
}