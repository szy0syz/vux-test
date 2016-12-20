<template>
  <x-header>云农股份新闻中心</x-header>
  <div>
  	<p>{{news.title}}</p>
    <hr>
  	<div>
      {{{news.content}}}
    </div>
  </div>
</template>
<script>
import { XHeader } from 'vux/src/components'
export default {
  components: {
    XHeader
  },
  data: function () {
    return ({
      news: {
        title: '',
        content: ''
      }
    })
  },
  init: function () {
    this.$http.get('http://localhost:8088/news/' + this.$route.params.id).then(function (res) {
        this.news = res.data
        console.log(this.news.title)
    }.bind(this))
  }
}
</script>
<style>
</style>