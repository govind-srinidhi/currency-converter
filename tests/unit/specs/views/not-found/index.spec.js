/**
 * @file It contains unit tests for not found.
 */
 import { mount, createLocalVue } from "@vue/test-utils"
 import Vuetify from "vuetify"
 import NotFoundPage from "@/views/not-found"
 
 let wrapper
 
 const mountNotFoundPage = () => {
   const localVue = createLocalVue()
 
   localVue.use(Vuetify)
 
   localVue.prototype.$CONSTANTS = {
    LABELS: {
      PAGE_UNAVAILABLE     : "Page not found",
      SOURCE_CURRENCY      : "Choose source currency",
      TARGET_CURRENCIES    : "Choose target currencies",
      SOURCE_AMOUNT        : "Source amount",
      CONVERT              : "Convert",
      RESET                : "Reset",
      DATE                 : "Choose date",
      CLEAR_SELECTED_VALUES: "Clear selected values",
      APP_NAME             : "Currency converter"
    },
    HTTP_STATUS_CODE: {
      OK                   : 200,
      UNAUTHORIZED         : 401,
      BAD_REQUEST          : 400,
      INTERNAL_SERVER_ERROR: 500
    },
    CURRENCIES: []
   }
 
   const vuetify = new Vuetify()
 
   wrapper = mount(NotFoundPage, {
     sync: false,
     localVue,
     vuetify
   })
 }
 
 const notFoundImage = () => wrapper.findComponent({ ref: "image_not_found" })
 const notFoundHeader = () => wrapper.find(".not-found-header")
 
 describe("not found page", () => {
   beforeEach(() => {
     mountNotFoundPage()
   })
 
   afterEach(() => {
     jest.clearAllMocks()
   })
 
   it("renders the not found page", () => {
     expect(wrapper).toBeTruthy()
   })
 
   it("renders elements correctly", async () => {
     expect(notFoundImage().exists()).toBeTruthy()
     expect(notFoundHeader().exists()).toBeTruthy()
   })
 
   it("matches the default snapshot", async () => {
     expect(wrapper.html()).toMatchSnapshot()
   })
 })