import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    addAvatar: (file) => axiosService.patch(urls.users.avatar, file)

}

export {
    userService
}
