import {defineNuxtConfig} from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    css: ['vuetify/styles'],
    vite: {
        ssr: {
            noExternal: ['vuetify']
        }
    },
    devtools: {enabled: true}
})
