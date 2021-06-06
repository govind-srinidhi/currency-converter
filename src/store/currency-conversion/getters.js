/**
 * @file It contains vuex currency conversion module getter methods to access store variables.
 */
 export default {
  isLoadingConversionRates: state => state.loadingConversionRates,
  conversionRates         : state => state.conversionRates
 }