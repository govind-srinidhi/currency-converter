/**
 * @file It contains table constants that are used to pass to v-data-table component.
 */
 export default {
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