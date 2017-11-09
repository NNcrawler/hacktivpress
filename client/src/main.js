// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from '@firebase/app';
import '@firebase/auth';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './vuex/store';

axios.defaults.baseURL = 'http://localhost:3000/';

const config = {
  apiKey: 'AIzaSyDxiBusDXY7HgKjyIhXzSgccvaqWSDsYwc',
  authDomain: 'final-project-e5816.firebaseapp.com',
  databaseURL: 'https://final-project-e5816.firebaseio.com',
  projectId: 'final-project-e5816',
  storageBucket: 'final-project-e5816.appspot.com',
  messagingSenderId: '875533271994',
};
firebase.initializeApp(config);

Vue.config.productionTip = false;

Vue.prototype.$auth = firebase.auth();
Vue.prototype.$store = store;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
