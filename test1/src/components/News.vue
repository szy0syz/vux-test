<template>
  <x-header :left-options="{showBack: false}">{{ mTitle }}</x-header>
  <swiper :list="list" :auto="true" :loop="true" style="margin:0px;" :aspect-ratio="1600/2588"></swiper>
  <panel :list="newsList" :footer="footer" type="2"></panel>
</template>

<script>
import {Swiper, XHeader, Panel} from 'vux/src/components'
import Detail from './Detail'

export default {
  components: {
    Swiper,
    XHeader,
    Panel,
    Detail
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      mTitle: '云农股份新闻中心',
      list: [{
        url: 'http://jerryshi.com',
        img: 'http://ofx24fene.bkt.clouddn.com/img/test/IMG_1666_Jc.jpg',
        title: '2016公司年会'
      }, {
        url: 'http://jerryshi.com',
        img: 'http://ofx24fene.bkt.clouddn.com/img/test/IMG_0865_Jc.jpg',
        title: '全国化肥高端会议'
      }, {
        url: 'http://jerryshi.com',
        img: 'http://ofx24fene.bkt.clouddn.com/img/test/IMG_1360_Jc.jpg',
        title: '南京千人峰会'
      }],
      newsList: [],
      footer: {
        title: '加载更多'
      }
    }
  },
  init: function () {
    this.$http.get('http://localhost:8088/news')
      .then(function (res) {
        this.newsList.push(res.data.map(function(item){
          return ({
            id: item._id,
            title: item.title,
            desc: item.editor,
            url: 'detail/' + item._id
          })
        }))
        console.log(this.newList)
      }.bind(this))
      .catch(function (res) {
        console.log(res)
      })
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