import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Routes from './router'
import FlashMessage from 'vue-flash-message'
// import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(FlashMessage, {})
export const bus = new Vue();
const router = new Router({ Routes })
new Vue({
    router,
    render: h => h(App),

}).$mount('#app')