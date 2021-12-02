import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router'
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

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '', Component}
  ]
});

const app = createApp(App);

app.use(router);
app.use(BootstrapVue);
app.use(BootstrapVueIcons);
app.component('side-bar', SideBar);
app.component('header-bar', HeaderBar);
app.component('user-cards-data', UserCardsData);
app.component('table-data', TableData);
app.component('activity-log', ActivityLog);
app.component('recent-payments', RecentPayments);
app.component('invoices-in-out', InvoicesInOut);
app.component('footer-view', FooterView);

app.mount('#app')
