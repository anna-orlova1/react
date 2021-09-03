import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL :"https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "245b3211-4aab-488d-b912-97fc4b676829"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        } )
    }
}

