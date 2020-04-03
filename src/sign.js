import Vue from 'vue'
import router from './router/sign'
import axios from 'axios'
import store from './store'
import Sign from "./views/Sign"
import config from "../config"
import api from "./api"

require('../mock')

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$config = config

new Vue({
    api,
    axios,
    config,
    store,
    router,
    render: r => r(Sign)
}).$mount('#app')

