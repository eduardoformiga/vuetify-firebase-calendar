import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBYuAyCN9B-kq3HwvjH7clEMCrFWjFHT5I",
  authDomain: "vuetify-firebase-calendar.firebaseapp.com",
  databaseURL: "https://vuetify-firebase-calendar.firebaseio.com",
  projectId: "vuetify-firebase-calendar",
  storageBucket: "vuetify-firebase-calendar.appspot.com",
  messagingSenderId: "228319444847",
  appId: "1:228319444847:web:c8bdb496612aba2cb1729a"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
