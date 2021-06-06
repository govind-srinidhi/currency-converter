/**
 * @file It contains the script for default layout.
 */
import CurrencySnackbarNotification from "@/components/snackbar-notification"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "Default",
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