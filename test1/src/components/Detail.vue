<template>
  <x-header>xxxx</x-header>
  <div>
  	<p>{{title}}</p>
  	<p>{{$route.params | json}}</p>
  </div>
</template>
<script>
import { XHeader } from 'vux/src/components'
export default {
  components: {
    XHeader
  },
  init: function () {
    this.$http.get('http://localhost:8088/news/5857a16759508cf25053cb93').then(function (res) {
        this.title = res.data.title
    }.bind(this))
  },
  data: function () {
    return ({
      title: 'null'
    })
  }
}
</script>
<style>
</style>