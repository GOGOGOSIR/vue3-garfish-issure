import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// index.js（主应用入口处）
import Garfish, { interfaces } from 'garfish'

Garfish.run({
  basename: '/',
  domGetter: '#subApp',

  autoRefreshApp: true,
  apps: [
    {
      name: 'app1',
      activeWhen: '/app1',
      entry: 'http://localhost:7891',
      props: {
        author: 'kokoma',
      },
    },
    {
      name: 'app2',
      activeWhen: '/app2',
      entry: 'http://localhost:7892',
    },
  ],
  afterLoad: (appInfo: interfaces.AppInfo, app) => {
    console.log(appInfo, '===1===', app)
  },
})

createApp(App).use(store).use(router).mount('#app')
