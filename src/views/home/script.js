import { mapActions, mapGetters } from "vuex"

/**
 * @file It contains the script for home page.
 */
export default {
  name: "Home",
  data() {
    return {
      sourceCurrency: undefined,
      targetCurrencies: new Array(),
      sourceAmount: 0,
      today       : new Date().toISOString().substr(0, 10),
      selectedDate: new Date().toISOString().substr(0, 10),
      showDateMenu: false,
      numberOfItemsInSelectionText: 1,
      currencyWiseTargetAmount: Array()
    }
  },
  computed: {
    ...mapGetters({
      conversionRates         : "currencyConversion/conversionRates",
      isLoadingConversionRates: "currencyConversion/isLoadingConversionRates",
    }),
    isConversionPossible() {
      return this.sourceCurrency && this.targetCurrencies.length > 0
    },
    headersForTable() {   
      return this.$TABLES.CURRENCY.headers.map(header => {
        return {
          ...header, ...{
            text: header.text
          }
        }
      })
    },
    footersForTable() {
      return {
        ...this.$TABLES.CURRENCY.footer, ...{
          itemsPerPageText: this.$TABLES.CURRENCY.footer.itemsPerPageText
        }
      }
    }
  },
  methods: {
    ...mapActions({
      loadConversionRates: "currencyConversion/loadConversionRates"
    }),

    convertCurrency() {
      if (!this.conversionRates || this.conversionRates?.date !== this.selectedDate) {
        this.loadConversionRates({date: this.selectedDate})
      } else {
        this.computeCurrencyWiseTargetAmount()
      }
    },

    computeCurrencyWiseTargetAmount() {
      this.currencyWiseTargetAmount = []
      if (this.targetCurrencies && this.sourceCurrency) {
        this.targetCurrencies.forEach((targetCurrency) =>
         this.currencyWiseTargetAmount.push({
           targetCurrency,
           amount: ((parseInt(this.sourceAmount) * this.conversionRates.rates[targetCurrency])/this.conversionRates.rates[this.sourceCurrency]).toFixed(2)
         })
        )
      }
    },

    resetConversionCriteria() {
      this.sourceCurrency   = undefined
      this.targetCurrencies = []
      this.currencyWiseTargetAmount = []
      this.selectedDate = this.today
      this.sourceAmount = 0
    },
  },
  watch: {
    conversionRates: {
      handler: function(value) {
        if (value) {
          this.computeCurrencyWiseTargetAmount()
        }
      }
    }
  }
}