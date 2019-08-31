// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    const firebaseConfig = {
      apiKey: 'AIzaSyCQCdZI1Z2XH42mm28Fc0z4XJx5sXMGh8o',
      authDomain: 'ad-sales-project.firebaseapp.com',
      databaseURL: 'https://ad-sales-project.firebaseio.com',
      projectId: 'ad-sales-project',
      storageBucket: '',
      messagingSenderId: '1072219832452',
      appId: '1:1072219832452:web:a7bf4cd6c3b48f14'
    }
    fb.initializeApp(firebaseConfig)
  }
})
