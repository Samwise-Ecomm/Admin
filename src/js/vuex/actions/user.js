module.exports = {
	getUser ({ dispatch }) {
		this.$http.get('self').then(function(response) {
			dispatch('SET_USER', response.data)
		})
	},

	logout ({ dispatch }) {
		dispatch('DELETE_USER')
		dispatch('DELETE_TOKEN')
		delete localStorage.samwellToken
	}
}