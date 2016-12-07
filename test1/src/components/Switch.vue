<template>
	<div>
	    <rater :value=3></rater>
	</div>
	<div>
	    <rater :value=2 :margin="15" active-color="#04BE02"></rater>
	</div>
	<div>
	    <rater :value=5 :max=6 :font-size=15 active-color="#FF9900"></rater>
	</div>
</template>
<style>
	div {
    	margin:5px 0;
	}
</style>