import api from './api'

const user = {
    profile: (sn) => {
        return api.get('/user/profile', {sn})
    }
}

export default user