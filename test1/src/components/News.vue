<template>
  <div class="vux-demo">
    <h1>{{ msg }}</h1>
  </div>
  <swiper :list="list" :auto="true" :loop="true"></swiper>
  <group title="新闻列表">
    <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig" height="auto" @pullup:loading="load2">
      <cell v-for="val in newsList" :title="val.title" is-link :inline-desc="val.inline"></cell>
    </scroller>
  </group>
  <toast :show.sync="show2" :time="1500" type="text">全部加载完成</toast>
</template>

<script>
import {Group, Cell, Swiper, Scroller, Toast} from 'vux/src/components'

export default {
  components: {
    Group,
    Cell,
    Swiper,
    Scroller,
    Toast
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: '云农股份',
      list: [{
        url: 'http://jerryshi.com',
        img: 'http://ofx24fene.bkt.clouddn.com/img/2016/lb1.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'http://jerryshi.com',
        img: 'http://ofx24fene.bkt.clouddn.com/img/2016/lb2.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'http://jerryshi.com',
        img: 'http://ofx24fene.bkt.clouddn.com/img/2016/lb3.jpg',
        title: '播下茶籽，明春可发芽？'
      }],
      newsList: [{
        id: '111',
        title: '云农股份有限公司扶贫日开展走访慰问贫困',
        inline: '时间: 2016-09-09    编辑：施振宇    浏览：99'
      }, {
        id: '222',
        title: '西部省(区)供销社主任参观云农股份大理分公司',
        inline: '时间: 2016-08-13    编辑：付茜    浏览：64'
      }, {
        id: '333',
        title: '云农股份名列2016云南百强企业第85位',
        inline: '时间: 2016-08-02    编辑：施振宇    浏览：40'
      }, {
        id: '444',
        title: '精准扶贫送化肥抢灾帮困保丰收',
        inline: '时间: 2016-06-03    编辑：付茜    浏览：14'
      }, {
        id: '555',
        title: '云南省人民政府表彰云农股份等26家完成出口目标',
        inline: '时间: 2016-03-01    编辑：付茜    浏览：113'
      }, {
        id: '666',
        title: '云农股份再次名列2014年中国农资流通企业综合竞',
        inline: '时间: 2015-11-23    编辑：施振宇    浏览：291'
      }],
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '服务器拼命加载中...'
      },
      show2: false
    }
  },
  methods: {
    load2 (uuid) {
      setTimeout(() => {
        if (this.newsList.length === 10) {
          this.show2 = true
          this.$broadcast('pullup:done', uuid)
        } else {
          this.newsList.push({
            id: '003',
            title: '精准扶贫送化肥抢灾帮困保丰收',
            inline: '时间: 2016-06-03    编辑：付茜    浏览：14'
          })
          this.$broadcast('pullup:reset', uuid)
        }
      }, 2000)
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