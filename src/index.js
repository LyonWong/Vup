import Vue from 'vue'
import router from './router'
import Index from "./views/Index"
import store from "./store"
import axios from "axios"
import config from "../config"

require('../mock')

Vue.prototype.$axios = axios
Vue.prototype.$config = config

new Vue({
    axios,
    router,
    store,
    render: r => r(Index)
}).$mount('#app')

