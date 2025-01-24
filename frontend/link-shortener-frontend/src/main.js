import { createApp } from 'vue'
import App from './App.vue'
import 'bootswatch/dist/darkly/bootstrap.min.css'

import routes from "./routes/routes"

createApp(App).use(routes).mount('#app')
