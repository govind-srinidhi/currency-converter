/**
 * @file It contains unit tests for default layout.
 */
 import { mount, createLocalVue } from "@vue/test-utils"
 import Vuetify from "vuetify"
 import Default from "@/layouts/default"
 import Vuex from "vuex"

 let wrapper

 const appBar                       = () => wrapper.findComponent({ ref: "app_bar_default" })
 const imageLogo                    = () => wrapper.findComponent({ ref: "image_logo" })
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

 const mountDefault = () => {
   const localVue = createLocalVue()

   localVue.prototype.$CONSTANTS = {
    LABELS: {
      APP_NAME: "Currency converter"
    }
   }

   localVue.use(Vuetify)
   localVue.use(Vuex)

   store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
   })
 
   const vuetify = new Vuetify()
 
   wrapper = mount(Default, {
     sync: false,
     stubs: ["currency-snackbar-notification"],
     localVue,
     store,
     vuetify
   })
 }

 
 describe("default layout", () => {
   beforeEach(() => {
     mountDefault()
   })
 
   afterEach(() => {
     jest.clearAllMocks()
   })
 
   it("renders the notification page", () => {
     expect(wrapper).toBeTruthy()
   })
 
   it("renders elements correctly", async () => {
     expect(appBar().exists()).toBeTruthy()
     expect(imageLogo().exists()).toBeTruthy()
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