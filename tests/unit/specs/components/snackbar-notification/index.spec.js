/**
 * @file It contains unit tests for snackbar.
 */
 import { mount, createLocalVue } from "@vue/test-utils"
 import Vuetify from "vuetify"
 import SnackbarNotification from "@/components/snackbar-notification"

 let wrapper

 const snackBarNotificationComponent = () => wrapper.findComponent({ ref: "snackbar_notification" })
 const notifyIcon                    = () => wrapper.findComponent({ ref: "icon_notification" })
 const closeNotification             = () => wrapper.findComponent({ ref: "button_close" })
 
 const mountNotificationComponent = propsData => {
   const localVue = createLocalVue()

   localVue.use(Vuetify)
 
   const vuetify = new Vuetify()
 
   wrapper = mount(SnackbarNotification, {
     sync: false,
     localVue,
     propsData,
     vuetify
   })
 }

 
 describe("snackbar notification component", () => {
   beforeEach(() => {
     mountNotificationComponent({
       pNotification: {
        type: "error",
        icon: "mdi-alert-circle",
        text: "error notification"
       }
     })
   })
 
   afterEach(() => {
     jest.clearAllMocks()
   })
 
   it("renders the notification page", () => {
     expect(wrapper).toBeTruthy()
   })
 
   it("renders elements correctly", async () => {
     expect(snackBarNotificationComponent().exists()).toBeTruthy()
     expect(notifyIcon().exists()).toBeTruthy()
     expect(closeNotification().exists()).toBeTruthy()
   })

   it("close event to be called, when notification close icon is clicked", async () => {
     closeNotification().trigger("click")
     await wrapper.vm.$nextTick()
     expect(wrapper.emitted().close).toBeTruthy()
   })

   it("matches the default snapshot", async () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
 })