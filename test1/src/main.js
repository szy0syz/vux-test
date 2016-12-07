import Vue from 'vue'
import App from './App'
import Home from './components/News'
import Detail from './components/Detail'
import VueRouter from 'vue-router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/detail/:id': {
    component: Detail
  }
})

router.start(App, '#app')

