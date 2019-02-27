import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue'
import AppNav from './componets/nav';
import AppHeader from './componets/header';
import AppFeedback from './componets/feedback';
import AppReviews from './componets/reviews';
import AppPer from './componets/performance';
import AppWork from './componets/work';
import AppQuestions from './componets/questions';
import AppFooter from './componets/footer';


import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.js'

Vue.use(BootstrapVue);
Vue.component('AppNav', AppNav);
Vue.component('AppHeader', AppHeader);
Vue.component('AppFeedback', AppFeedback);
Vue.component('AppReviews', AppReviews);
Vue.component('AppPer', AppPer);
Vue.component('AppWork', AppWork);
Vue.component('AppQuestions', AppQuestions);
Vue.component('AppFooter', AppFooter);

new Vue({
  el: '#app',
  render: h => h(App),
});
