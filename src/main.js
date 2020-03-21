import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue' //Importing
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue) // Telling Vue to use this in whole application

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
