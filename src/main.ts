import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Button } from 'ant-design-vue';
import { Input } from 'ant-design-vue';
import { Modal } from 'ant-design-vue';

import 'ant-design-vue/lib/button/style/index.css'
import 'ant-design-vue/lib/modal/style/index.css'
import 'ant-design-vue/lib/input/style/index.css'

const app = createApp(App);

app.use(Button)
app.use(Modal)
app.use(Input)

app.mount('#app');
