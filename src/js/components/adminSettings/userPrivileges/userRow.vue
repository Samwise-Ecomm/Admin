<template>
<tr v-if="!user.root">
	<td>{{ user.email }}</td>
	<td>
		<input type="checkbox" v-model="user.admin" 
			:disabled="user.email == $root.user.email" 
			@change="set('admin')">
	</td>
	<td v-if="user.admin" v-for="n in 5">
		<input type="checkbox" disabled checked>
	</td>
	<td v-if="!user.admin">
		<input type="checkbox" v-model="user.catalogs" 
			@change="set('catalogs')">
	</td>
	<td v-if="!user.admin">
		<input type="checkbox" v-model="user.customers" 
			@change="set('customers')">
	</td>
	<td v-if="!user.admin">
		<input type="checkbox" v-model="user.inventory" 
			@change="set('inventory')">
	</td>
	<td v-if="!user.admin">
		<input type="checkbox" v-model="user.invoices" 
			@change="set('invoices')">
	</td>
	<td v-if="!user.admin">
		<input type="checkbox" v-model="user.pages" 
			@change="set('pages')">
	</td>
</tr>
</template>

<script>
export default {
  props: ["user", "icon"],

  methods: {
    set(privilege) {
      var request = {}
      this.icon.working()
      request[privilege] = this.user[privilege]

      this.$http.patch(`user/${this.user.id}`, request).then(
        response => {
          this.icon.check()
        },
        () => {
          this.icon.fail()
        }
      )
    }
  }
}
</script>