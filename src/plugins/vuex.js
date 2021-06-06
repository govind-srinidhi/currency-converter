/**
 * @file It exports a vuex store instance used by this application.
 */
 import Vue from "vue"
 import Vuex from "vuex"
 import currencyConversion from "@/store/currency-conversion"
 import shared from "@/store/shared"
 
 Vue.use(Vuex)
 
 export default new Vuex.Store({
   modules: {
    currencyConversion,
    shared
   }
 })