/**
 * @file It contains unit tests for home.
 */
 import { mount, createLocalVue } from "@vue/test-utils"
 import Vuetify from "vuetify"
 import HomePage from "@/views/home"
 import Vuex from "vuex"
 import VueRouter from "vue-router"

 let wrapper

 const state = {
  loadingConversionRates: undefined,
  conversionRates       : undefined
 }

 const mutations = {
  setLoadingConversionRates: (state, loadingConversionRates) => {
    state.loadingConversionRates = loadingConversionRates
  },
  setConversionRates: (state, conversionRates) => {
    state.conversionRates = conversionRates
  }
 }

 const getters = {
  "currencyConversion/isLoadingConversionRates": state => state.loadingConversionRates,
  "currencyConversion/conversionRates"         : state => state.conversionRates,
 }

 const actions = {
  "currencyConversion/loadConversionRates": jest.fn()
 }

 let store
 const router = new VueRouter()
 
 const mountHomePage = () => {
   const localVue = createLocalVue()
 
 
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
    CURRENCIES: [
      "AED",
      "AFN",
      "ALL",
      "AMD",
      "ANG",
      "AOA",
      "ARS",
      "AUD",
      "AWG",
      "AZN",
      "BAM",
      "BBD",
      "BDT",
      "BGN",
      "BHD",
      "BIF",
      "BMD",
      "BND",
      "BOB",
      "BRL",
      "BSD",
      "BTC",
      "BTN",
      "BWP",
      "BYN",
      "BYR",
      "BZD",
      "CAD",
      "CDF",
      "CHF",
      "CLF",
      "CLP",
      "CNY",
      "COP",
      "CRC",
      "CUC",
      "CUP",
      "CVE",
      "CZK",
      "DJF",
      "DKK",
      "DOP",
      "DZD",
      "EGP",
      "ERN",
      "ETB",
      "EUR",
      "FJD",
      "FKP",
      "GBP",
      "GEL",
      "GGP",
      "GHS",
      "GIP",
      "GMD",
      "GNF",
      "GTQ",
      "GYD",
      "HKD",
      "HNL",
      "HRK",
      "HTG",
      "HUF",
      "IDR",
      "ILS",
      "IMP",
      "INR",
      "IQD",
      "IRR",
      "ISK",
      "JEP",
      "JMD",
      "JOD",
      "JPY",
      "KES",
      "KGS",
      "KHR",
      "KMF",
      "KPW",
      "KRW",
      "KWD",
      "KYD",
      "KZT",
      "LAK",
      "LBP",
      "LKR",
      "LRD",
      "LSL",
      "LTL",
      "LVL",
      "LYD",
      "MAD",
      "MDL",
      "MGA",
      "MKD",
      "MMK",
      "MNT",
      "MOP",
      "MRO",
      "MUR",
      "MVR",
      "MWK",
      "MXN",
      "MYR",
      "MZN",
      "NAD",
      "NGN",
      "NIO",
      "NOK",
      "NPR",
      "NZD",
      "OMR",
      "PAB",
      "PEN",
      "PGK",
      "PHP",
      "PKR",
      "PLN",
      "PYG",
      "QAR",
      "RON",
      "RSD",
      "RUB",
      "RWF",
      "SAR",
      "SBD",
      "SCR",
      "SDG",
      "SEK",
      "SGD",
      "SHP",
      "SLL",
      "SOS",
      "SRD",
      "STD",
      "SVC",
      "SYP",
      "SZL",
      "THB",
      "TJS",
      "TMT",
      "TND",
      "TOP",
      "TRY",
      "TTD",
      "TWD",
      "TZS",
      "UAH",
      "UGX",
      "USD",
      "UYU",
      "UZS",
      "VEF",
      "VND",
      "VUV",
      "WST",
      "XAF",
      "XAG",
      "XAU",
      "XCD",
      "XDR",
      "XOF",
      "XPF",
      "YER",
      "ZAR",
      "ZMK",
      "ZMW",
      "ZWL"
    ]
   }

   localVue.prototype.$TABLES = {
    CURRENCY: {
      headers: [{
        text : "Target currency",
        align: "left",
        value: "targetCurrency",
        class: "subheading primary lighten-2 white--text subtitle-2 font-weight-bold"
      }, {
        text : "Target amount",
        align: "left",
        value: "amount",
        class: "subheading primary lighten-2 white--text subtitle-2 font-weight-bold"
      }],
      noDataText  : "No data found.",
      itemsPerPage: 10,
      footer      : {
        itemsPerPageOptions: [10, 20, 30],
        itemsPerPageText   : "Items per page",
        showFirstLastPage  : true,
        showCurrentPage    : true
      }
    }
   }

   localVue.use(Vuex)
   localVue.use(Vuetify)
   localVue.use(VueRouter)
 
   const vuetify = new Vuetify()
   store = new Vuex.Store({
     state,
     getters,
     mutations,
     actions
   })
 
   wrapper = mount(HomePage, {
     sync: false,
     localVue,
     store,
     router,
     vuetify
   })
 }
 
 const autocompleteSourceCurrency    = () => wrapper.findComponent({ ref: "autocomplete_source_currency" })
 const autoCompleteTargetCurrencies  = () => wrapper.findComponent({ ref: "autocomplete_target_currencies" })
 const targetCurrenciesRemaining     = () => wrapper.findComponent({ ref: "span_target_currency_others" })
 const dateMenu                      = () => wrapper.findComponent({ ref: "menu_date" })
 const sourceAmountTextField         = () => wrapper.findComponent({ ref: "text_field_source_amount" })
 const convertButton                 = () => wrapper.findComponent({ ref: "button_convert" })
 const resetButton                   = () => wrapper.findComponent({ ref: "button_reset" })
 const currencyWiseTargetAmountTable = () => wrapper.findComponent({ ref: "table_currency_wise_target_amount" })
 
 describe("home page", () => {
   beforeEach(() => {
     mountHomePage()
   })
 
   afterEach(() => {
     jest.clearAllMocks()
   })
 
   it("renders the home page", () => {
     expect(wrapper).toBeTruthy()
   })
 
   it("renders elements correctly", async () => {
     expect(autocompleteSourceCurrency().exists()).toBeTruthy()
     expect(autoCompleteTargetCurrencies().exists()).toBeTruthy()
     expect(sourceAmountTextField().exists()).toBeTruthy()
     expect(convertButton().exists()).toBeTruthy()
     expect(resetButton().exists()).toBeTruthy()
     expect(currencyWiseTargetAmountTable().exists()).toBeFalsy()
   })

   it("convert button is disabled until source and target currencies are filled", async () => {
     expect(convertButton().attributes("disabled")).toBe("disabled")
     wrapper.setData({
      sourceCurrency: "EUR",
      targetCurrencies: ["INR", "USD"]
     })
     await wrapper.vm.$nextTick()
     expect(convertButton().attributes("disabled")).toBeUndefined()
   })

   it("should be able to choose multiple target currencies", async () => {
    expect(autoCompleteTargetCurrencies().exists()).toBeTruthy()
    const selectedTargetCurrencies = ["INR", "USD"]
    wrapper.setData({
      targetCurrencies: selectedTargetCurrencies
    })
    await wrapper.vm.$nextTick()
    expect(autoCompleteTargetCurrencies().find("input[type='hidden']").element.value).toBe(selectedTargetCurrencies.join())
    expect(targetCurrenciesRemaining().text()).toBe("(+1 others)")
   })

   it("on selecting multiple target currencies, shows one of them and remaining are rendered as +remaining others", async () => {
    const selectedTargetCurrencies = ["INR", "USD"]
    wrapper.setData({
      targetCurrencies: selectedTargetCurrencies
    })
    await wrapper.vm.$nextTick()
    expect(autoCompleteTargetCurrencies().find("input[type='hidden']").element.value).toBe(selectedTargetCurrencies.join())
   })

   it("should be able to filter based on date", async () => {
    wrapper.setData({
      showDateMenu: false
    })
    await wrapper.vm.$nextTick()

    expect(dateMenu().exists()).toBeTruthy()

    wrapper.setData({
      selectedDate: "2021-06-06",
      showDateMenu: true
    })
    await wrapper.vm.$nextTick()

    expect(dateMenu().find("input").element.value).toBe("2021-06-06")
  })
  
  it("convert currency to be called, if the conversion rates are not available for the selected date", async () => {
    wrapper.setData({
      selectedDate: "2021-06-06",
      sourceAmount: 2300,
      sourceCurrency: "ALL",
      targetCurrencies: ["EUR", "USD"]
    })
    await wrapper.vm.$nextTick()
    convertButton().trigger("click")

    await wrapper.vm.$nextTick()
    expect(actions["currencyConversion/loadConversionRates"]).toBeCalledTimes(1)
  })

  it("convert currency api is not called, if the conversion rates are already available for the selected date and the target currency table is rendered at the bottom", async () => {
    store.commit("setConversionRates", {
      rates: {
        "EUR": 21,
        "USD": 31,
        "INR": 10,
        "ALL": 5
      },
      base: "EUR",
      date: "2021-06-06"
    })
    wrapper.setData({
      selectedDate: "2021-06-06",
      sourceAmount: 2300,
      sourceCurrency: "ALL",
      targetCurrencies: ["EUR", "USD"]
    })
    await wrapper.vm.$nextTick()
    convertButton().trigger("click")

    await wrapper.vm.$nextTick()
    expect(actions["currencyConversion/loadConversionRates"]).toBeCalledTimes(0)

    expect(currencyWiseTargetAmountTable().exists()).toBeTruthy()

    const tableHeaders = currencyWiseTargetAmountTable().findAll("thead tr th")

    expect(tableHeaders.at(0).exists()).toBeTruthy()
    expect(tableHeaders.at(0).text()).toContain("Target currency")
    expect(tableHeaders.at(1).exists()).toBeTruthy()
    expect(tableHeaders.at(1).text()).toContain("Target amount")

    const tableRows = currencyWiseTargetAmountTable().findAll("tbody tr")

    for (const iterator in wrapper.vm.currencyWiseTargetAmount) {
      const row = tableRows.at(iterator)

      expect(row.exists()).toBeTruthy()

      const cells = row.findAll("td")

      expect(cells.at(0).exists()).toBeTruthy()
      expect(cells.at(0).text()).toContain(wrapper.vm.currencyWiseTargetAmount[iterator].targetCurrency)
      expect(cells.at(1).exists()).toBeTruthy()
      expect(cells.at(1).text()).toContain(wrapper.vm.currencyWiseTargetAmount[iterator].amount)
    }
  })

  it("matches the default snapshot", async () => {
     expect(wrapper.html()).toMatchSnapshot()
   })
 })