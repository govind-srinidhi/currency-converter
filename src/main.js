/**
 * @file This is the entry file for currency converter application.
 * All the plugins should be loaded here before the new vue instance is created and mounted.
 */
import Vue from "vue"
import App from "@/App.vue"
import "@/plugins/constants"
import router from "@/plugins/router"
import store from "@/plugins/vuex"
import vuetify from "@/plugins/vuetify"

Vue.config.productionTip = false

new Vue({
 router,
 store,
 vuetify,
 render: h => h(App)
}).$mount('#app')