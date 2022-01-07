import { h, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { vueBridge } from '@garfish/bridge'

export const provider = vueBridge({
  createApp,
  handleInstance: (app: any, props: any) => {
    app.use(router)
  },
  appOptions: () => ({
    el: '#app',
    render() {
      return h(App)
    },
  }),
})

if (!window.__GARFISH__) {
  createApp(App).use(store).use(router).mount('#app')
}
