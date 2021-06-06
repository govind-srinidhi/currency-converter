/**
 * @file It contains unit tests for blank layout.
 */
 import { mount, createLocalVue } from "@vue/test-utils"
 import Vuetify from "vuetify"
 import Blank from "@/layouts/blank"
 import Vuex from "vuex"

 let wrapper

 const currencySnackbarNotification = () => wrapper.find("currency-snackbar-notification-stub")

 let store

 const state = {
  notification: undefined
 }

 const mutations = {
  setNotification: (state, notification) => {
    state.notification = notification
  }
 }

 const getters = {
  "shared/notification": state => state.notification,
 }

 const actions = {
  "shared/suppressNotification": jest.fn()
 }

 const mountBlank = () => {
   const localVue = createLocalVue()

   localVue.use(Vuetify)
   localVue.use(Vuex)

   store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
   })
 
   const vuetify = new Vuetify()
 
   wrapper = mount(Blank, {
     sync: false,
     stubs: ["currency-snackbar-notification"],
     localVue,
     store,
     vuetify
   })
 }

 
 describe("blank layout", () => {
   beforeEach(() => {
     mountBlank()
   })
 
   afterEach(() => {
     jest.clearAllMocks()
   })
 
   it("renders the blank layout", () => {
     expect(wrapper).toBeTruthy()
   })
 
   it("renders elements correctly", async () => {
     expect(currencySnackbarNotification().exists()).toBeFalsy()
   })

   it("notification to be rendered, whenever notification is called", async () => {
     store.commit("setNotification", {
       type: "error",
       icon: "mdi-alert",
       text: "error notification"
     })
     await wrapper.vm.$nextTick()
     expect(currencySnackbarNotification().exists()).toBeTruthy()
     currencySnackbarNotification().vm.$emit("close")
     await wrapper.vm.$nextTick()
     expect(actions["shared/suppressNotification"]).toHaveBeenCalledTimes(1)
   })

   it("matches the default snapshot", async () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
 })