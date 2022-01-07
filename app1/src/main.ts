import { h, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { vueBridge } from '@garfish/bridge'

export const provider = vueBridge({
  createApp,
  handleInstance: (app: any, props: any) => {
    console.log(app, props)
    app.use(router)
  },
  // appId: 'vite-vue-sub-app', // 在 vite 应用时提供，该值与 htmlPlugin 第一个参数相同
  appOptions: () => ({
    el: '#app',

    // store,
    render() {
      // return createApp(App).use(store).use(router).mount("#app");
      return h(App)
    },
  }),
})

// provider({ name: 'zhangshan' }).then((render) => {

// })

if (!window.__GARFISH__) {
  createApp(App).use(store).use(router).mount('#app')
}
