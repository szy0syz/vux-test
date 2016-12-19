import Vue from 'vue'
import App from './App'
import News from './components/News'
import Detail from './components/Detail'
import VueRouter from 'vue-router'
import axios from 'axios'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.prototype.$http = axios

const router = new VueRouter()

router.map({
  '/': {
    component: News
  },
  '/detail/:id': {
    component: Detail
  }
})

router.start(App, '#app')

