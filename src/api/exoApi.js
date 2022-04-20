import axiosService from "@/plugins/axiosService";

export default {
    async getApi(){
        return axiosService.get('http://localhost:3000/items')
    },
    async getOccurrence(){
        return axiosService.get('http://localhost:3000/occurrence')
    }
}