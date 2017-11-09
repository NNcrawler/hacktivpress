// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from '@firebase/app';
import '@firebase/auth';
import App from './App';
import router from './router';

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
