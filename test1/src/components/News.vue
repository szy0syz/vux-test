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
      newsList: [{
        title: '云农股份有限公司扶贫日开展走访慰问贫困',
        desc: '时间: 2016-09-09  |  编辑：施振宇  |  浏览：99',
        url: '/detail/111'
      }, {
        title: '西部省(区)供销社主任参观云农股份大理分公司',
        desc: '时间: 2016-08-13  |  编辑：付茜  |  浏览：64',
        url: '/detail/222'
      }, {
        title: '云农股份名列2016云南百强企业第85位',
        desc: '时间: 2016-08-02  |  编辑：施振宇  |  浏览：40',
        url: '/detail/333'
      }, {
        title: '精准扶贫送化肥抢灾帮困保丰收',
        desc: '时间: 2016-06-01  |  编辑：付茜  |  浏览：14',
        url: '/detail/444'
      }, {
        title: '云南省人民政府表彰云农股份等26家完成出口目标',
        desc: '时间: 2016-03-01  |  编辑：付茜  |  浏览：113',
        url: '/detail/555'
      }, {
        id: '666',
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '云农股份再次名列2014年中国农资流通..1',
        desc: '时间: 2015-11-23  |  编辑：施振宇  |  浏览：291',
        url: '/detail/666'
      }, {
        id: '777',
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '云农股份再次名列2014年中国农资流通..2',
        desc: '时间: 2015-11-23  |  编辑：施振宇  |  浏览：291',
        url: '/detail/777'
      }, {
        id: '888',
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '云农股份再次名列2014年中国农资流通..3',
        desc: '时间: 2015-11-23  |  编辑：施振宇  |  浏览：291',
        url: '/detail/888'
      }, {
        id: '888',
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '云农股份再次名列2014年中国农资流通..3',
        desc: '时间: 2015-11-23  |  编辑：施振宇  |  浏览：291',
        url: '/detail/999'
      }, {
        id: '999',
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '云农股份再次名列2014年中国农资流通..4',
        desc: '时间: 2015-11-23  |  编辑：施振宇  |  浏览：291',
        url: '/detail/100'
      }, {
        id: '101',
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '云农股份再次名列2014年中国农资流通..5',
        desc: '时间: 2015-11-23  |  编辑：施振宇  |  浏览：291',
        url: '/detail/101'
      }],
      footer: {
        title: '加载更多'
      }
    }
  },
  created: function () {
    this.$http.get('http://localhost:8088/news')
      .then(function (res) {
        this.mTitle = res.data.length
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