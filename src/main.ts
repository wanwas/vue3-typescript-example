import { createApp } from 'vue'

import App from '@/App.vue'

import router from "@/router";
import store from '@/store'

// create app instance
const app = createApp(App)

// use router
app.use(router)
// use store
app.use(store)

// mount app instance
app.mount('#app')
