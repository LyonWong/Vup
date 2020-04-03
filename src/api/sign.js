import api from "./api"

const sign = {
    passwordIn: (identity, password) => {
        return api.post("/sign/password-in", { identity, password })
    },
    accountOn: (identity) => {
        return api.post('/sign/account-on', { identity })
    }
}

export default sign