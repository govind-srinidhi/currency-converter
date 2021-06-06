/**
 * @file It contains the script for blank layout.
 */
 import CurrencySnackbarNotification from "@/components/snackbar-notification"
 import { mapActions, mapGetters } from "vuex"
 
 export default {
   name: "Blank",
   data: () => ({}),
   components: { CurrencySnackbarNotification },
   computed: {
     ...mapGetters({
       notification: "shared/notification"
     })
   },
   methods: {
     ...mapActions({
       suppressNotification: "shared/suppressNotification"
     })
   }
 }