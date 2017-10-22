<template>
	<table class="table table-hover">
		<thead is="sorters"></thead>

		<tbody v-for="invoice in invoices">
			<tr is="row" :invoice="invoice"></tr>
			<tr v-if="expandedIndex == invoice.id" class="hidden-xxs" style="background: white;">
				<td colspan="7">
					<summary :invoice="invoice"></summary>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
  props: ["invoices"],

  components: {
    summary: require("~/components/invoice/summary.vue"),
    sorters: require("./sorters.vue"),
    row: require("./row.vue")
  },

  vuex: {
    getters: {
      expandedIndex: state => state.invoices.expandedIndex
    }
  }
}
</script>