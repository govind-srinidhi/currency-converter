/**
 * @file It contains all the action methods which are used to mutate state asynchronously
 */
import { GET_HTTP_CLIENT } from "@/api"

const baseURL = process.env.VUE_APP_EXCHANGE_RATE_API_BASE_URL

export default {
  /**
   * This action will load conversion rates.
   * @param {*} context is the store.
   * @param {*} payload is the filter to load conversion rates.
   */
  async loadConversionRates(context, payload) {
    context.commit("setLoadingConversionRates", true)

    const httpClient = GET_HTTP_CLIENT({
      baseURL
    }, context)
    

    Promise.resolve(httpClient.get(`/${payload.date}`))
      .then(response => {
        context.commit("setConversionRates", response.data)
      })
      .catch(response => {
        context.dispatch("shared/notify", {
          type: "error",
          text: response.message
        }, {
          root: true
        })
      })
      .finally(() => {
        context.commit("setLoadingConversionRates", false)
      })

  }
}