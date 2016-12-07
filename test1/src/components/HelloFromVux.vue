<template>
  <div class="vux-demo">
    <img class="logo" src="../assets/vux_logo.png">
    <h1>{{ msg }}</h1>
  </div>
  <swiper :list="list" :auto="true" :loop="true"></swiper>
  <group title="cell demo">
    <cell title="Vux" value="Cool" is-link></cell>
    <switch title="Switch" :value=true></switch>
    <x-button type="primary">primary</x-button>
  </group>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import Switch from 'vux/src/components/switch'
import XButton from 'vux/src/components/x-button'
import Swiper from 'vux/src/components/swiper'

export default {
  components: {
    Group,
    Cell,
    Switch,
    XButton,
    Swiper
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Szy!',
      list: [{
        url: 'http://jerryshi.com',
        img: 'http://ofx24fene.bkt.clouddn.com/img/2016/lb1.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400160890&ampidx=1&ampsn=29ef02af25793a11a3f6aec92bfb46c1&ampscene=19#wechat_redirect',
        img: 'http://ofx24fene.bkt.clouddn.com/img/2016/lb2.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'http://jerryshi.com',
        img: 'http://ofx24fene.bkt.clouddn.com/img/2016/lb3.jpg',
        title: '播下茶籽，明春可发芽？'
      }]
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>