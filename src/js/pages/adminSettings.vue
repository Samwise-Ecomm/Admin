<template>
<div class="row">
	<div class="col-md-6">
		<register-user></register-user>
	</div>

	<div class="col-md-6">
		<user-privileges></user-privileges>
	</div>
</div>
</template>

<script>
export default {
  components: {
    registerUser: require("~/components/adminSettings/registerUser/box.vue"),
    userPrivileges: require("~/components/adminSettings/userPrivileges/box.vue")
  }
}
</script>