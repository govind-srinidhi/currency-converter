/**
 * @file It contains all the action methods which are used to mutate state asynchronously
 */
import CONSTANTS from "@/constants"

export default {
  /**
   * This action will notify users
   * @param {*} context is the store.
   * @param {*} notification is the notification content.
   */
  async notify(context, notification) {
    context.commit("setNotification", notification)
    setTimeout(() => {
      context.commit("setNotification", undefined)
    }, CONSTANTS.NOTIFICATION_TIMEOUT)
  },

  /**
   * This action will suppress notification.
   * @param {*} context is the store.
   */
  suppressNotification(context) {
    context.commit("setNotification", undefined)
  }
}