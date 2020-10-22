/*
 * Copyright (C) 2011-2020 ShenZhen iBOXCHAIN Information Technology Co.,Ltd.
 *
 * All right reserved.
 *
 * This software is the confidential and proprietary
 * information of iBOXCHAIN Company of China.
 * ("Confidential Information"). You shall not disclose
 * such Confidential Information and shall use it only
 * in accordance with the terms of the contract agreement
 * you entered into with iBOXCHAIN inc.
 */

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Resource from 'vue-resource';
import VueRouter from 'vue-router';
import VueCodemirror from 'vue-codemirror'

import App from './App';
import Home from './components/Home.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Resource);
Vue.use(VueCodemirror);

var routes = [{
    path: '/',
    redirect: '/main',
    component: Home,
    name: '控制台',
    hidden: true,
    children: [{
        path: '/main',
        name: '控制台',
        component: require('./components/Main.vue')
    }]
}, {
    path: '/alarm',
    component: Home,
    name: '',
    hidden: false,
    leaf: true,
    children: [{
        path: '/alarm',
        name: '告警配置',
        iconCls: 'el-icon-phone-outline',
        component: require('./components/helper/alarm.vue')
    }]
}, {
    path: '/mail',
    component: Home,
    name: '',
    hidden: false,
    leaf: true,
    children: [{
        path: '/mail',
        name: '报表配置',
        iconCls: 'el-icon-message',
        component: require('./components/helper/mail.vue')
    }]
}, {
    path: '/segment',
    component: Home,
    name: '',
    hidden: false,
    leaf: true,
    children: [{
        path: '/segment',
        name: '异常链路管理',
        iconCls: 'el-icon-data-line',
        component: require('./components/helper/segment.vue')
    }]
}];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: {
        App
    }
}).$mount('#app');