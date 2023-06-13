import {defineNuxtPlugin} from "nuxt/app";
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        theme: {
          defaultTheme: 'dark'
        },
        ssr:true,
        components,
        directives
    })
    
    nuxtApp.vueApp.use(vuetify)
})