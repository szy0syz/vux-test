<template>
	<div>
  		<swiper :list="list" auto></swiper>
	<div>
</template>

<script>
import Swiper from 'vux/src/components/swiper'

export default {

</script>
	export default {
	  	data: function () {
			return {
			  list: [{
			    url: '#',
			    img: 'http://ofx24fene.bkt.clouddn.com/img/2016/lb1.jpg',
			    title: '如何手制一份秋意的茶？'
			  }, {
			    url: '#',
			    img: 'http://ofx24fene.bkt.clouddn.com/img/2016/lb2.jpg',
			    title: '茶包VS原叶茶'
			  }, {
			    url: '#',
			    img: 'http://ofx24fene.bkt.clouddn.com/img/2016/lb3.jpg',
			    title: '播下茶籽，明春可发芽？'
			  }, {
			    url: '#',
			    img: 'http://ofx24fene.bkt.clouddn.com/img/2016/lb4.JPG',
			    title: '播下茶籽？'
			  }]
			}
	    }
}
<style>

</style>