<template>
<div class="row">
	<div class="col-xs-12">
		<invoices-box></invoices-box>
	</div>
</div>
</template>

<script>
export default {
  components: {
    invoicesBox: require("~/components/invoices/box.vue")
  }
}
</script>