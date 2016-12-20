<template>
  <x-header :left-options="{showBack: false}">{{ mTitle }}</x-header>
  <swiper :list="list" :auto="true" :loop="true" style="margin:0px;" :aspect-ratio="1600/2588"></swiper>
  <panel :list="newsList" :footer="footer" :type="type"></panel>
</template>

<script>
import {Swiper, XHeader, Panel} from 'vux/src/components'

export default {
  components: {
    Swiper,
    XHeader,
    Panel
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      mTitle: '云农股份新闻中心',
      list: [],
      newsList: [],
      footer: {
        title: '加载更多'
      },
      type: '1'
    }
  },
  init: function () {
    this.$http.get('http://localhost:8088/news')
      .then(function (res) {
        res.data.forEach(function(item, index) {
          if(item.isCover  == true) {
            this.list.push({
              id: item._id,
              url: 'detail/' + item._id,
              img: item.coverImgPath,
              title: item.title
            })
          }
          else {
            this.newsList.push({
              id: item._id,
              title: item.title,
              desc: item.editor,
              url: 'detail/' + item._id
            })
          }
        }.bind(this))
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