<template>
<span>
	<button class="btn btn-sm btn-block btn-primary" @click="charging = true">
		<i class="fa fa-credit-card"></i> Charge
	</button>

	<light-box :id="id" :show.sync="charging"></light-box>
</span>
</template>

<script>
export default {
  data() {
    return {
      charging: false
    }
  },

  props: ["id"],

  components: {
    lightBox: require("./lightBox.vue")
  }
}
</script>