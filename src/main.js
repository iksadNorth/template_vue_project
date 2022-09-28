import { createApp } from 'vue'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'

import axios from "axios";
import store from '@/store'
import { router , registerCompoent } from '@/route';
import configuration from '@/cfg/index';

loadFonts()

const app = createApp(App)

app.config.globalProperties.$axios = axios;

app.use(configuration)
app.use(registerCompoent)

app.use(vuetify)
app.use(store)
app.use(router)
app.mount('#app')
