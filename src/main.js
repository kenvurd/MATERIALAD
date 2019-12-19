import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyC6GpvkAeCNWmMiWT_5haDQyP_QRTWK0DY",
      authDomain: "mt-ad-882b7.firebaseapp.com",
      databaseURL: "https://mt-ad-882b7.firebaseio.com",
      projectId: "mt-ad-882b7",
      storageBucket: "mt-ad-882b7.appspot.com",
      messagingSenderId: "878766132860",
      appId: "1:878766132860:web:e9b961462c0ff9c8d0c3f9"
    };
    // Initialize Firebase
    fb.initializeApp(firebaseConfig);
  },
  render: h => h(App)
}).$mount('#app')
