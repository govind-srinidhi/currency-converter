/**
 * @file It contains vuex currency conversion module mutations to mutate the state variables.
 */
 export default {
  setLoadingConversionRates: (state, loadingConversionRates) => {
    state.loadingConversionRates = loadingConversionRates
  },
  setConversionRates: (state, conversionRates) => {
    state.conversionRates = conversionRates
  }
}