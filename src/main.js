import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './Css/custom.scss'


import App from './App.vue';
import SideBar from './components/layout/SideBar.vue';
import HeaderBar from './components/layout/HeaderBar.vue';
import UserCardsData from './components/layout/UserCardsData.vue';
import TableData from './components/layout/TableData.vue';
import ActivityLog from './components/layout/ActivityLog.vue';
import RecentPayments from './components/layout/RecentPayments.vue';
import InvoicesInOut from './components/layout/InvoicesInOut.vue';
import FooterView from './components/layout/FooterView.vue';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use('side-bar', SideBar);
Vue.use('header-bar', HeaderBar);
Vue.use('user-cards-data', UserCardsData);
Vue.use('table-data', TableData);
Vue.use('activity-log', ActivityLog);
Vue.use('recent-payments', RecentPayments);
Vue.use('invoices-in-out', InvoicesInOut);
Vue.use('footer-view', FooterView);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
