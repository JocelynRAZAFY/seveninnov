import ExoApi from '../api/exoApi'
export default {
    namespace: true,
    state:{
        items: []
    },
    mutations: {
        setItems(state,items){
            state.items = items
        }
    },
    actions:{
        async exoAction(context){
            const res = await ExoApi.getApi()
            console.log(res)
        }
    }
}