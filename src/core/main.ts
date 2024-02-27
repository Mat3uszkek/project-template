import { createApp } from 'vue'
import './style.css'
import App from '@shell/App.vue'
import i18n from "@locales/index.ts"

createApp(App).use(i18n).mount('#app')
