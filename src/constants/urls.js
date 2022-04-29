const baseURL = process.env.REACT_APP_API

const urls = {
    auth: {
        login: '/auth'
    },
    users: {
        avatar: '/users/avatar'
    }
}

export {
    baseURL,
    urls
}
