import axiosService from "@/plugins/axiosService";

export default {
    async getApi(){
        return axiosService.get('/items')
    }
}