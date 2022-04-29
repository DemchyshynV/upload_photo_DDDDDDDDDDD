import {axiosService} from "./axios.service";
import {urls} from "../constants";

const authService = {
    login:()=>axiosService.post(urls.auth.login, {email:'user@gmail.com', password:'P@$$word1'})
}

export {authService}
