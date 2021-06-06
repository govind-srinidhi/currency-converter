/**
 * @file This file is used setup axios instance to make api calls
 */
 import axios from "axios"

 export const GET_HTTP_CLIENT = (config) => {
   const httpClient = axios.create(config)
   if (config && config.baseURL) {
     httpClient.interceptors.request.use(async config => {
        config.params = {
          ...config.params,
          access_key: process.env.VUE_APP_EXCHANGE_RATE_API_KEY
        }
        return config
      }
     )
   }
   return httpClient
 }