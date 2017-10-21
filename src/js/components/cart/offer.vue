<template>
<li v-if="loaded">
	<div class="pull-left">
		<img :src="thumbnail">
	</div>
	<h4>
		<a>{{ offer.name }}</a>
	</h4>
	<item
		v-for="item in offer.items"
		:key="item.id"
		:item="item" 
		:offer-id="offer.id"
		v-ref:items
	></item>
</li>
</template>

<script>
module.exports = {
  data() {
    return {
      loaded: false,
      offer: {}
    }
  },

  computed: {
    thumbnail: () =>
      this.offer.pictures.length > 0
        ? `/img/${this.offer.pictures["0"].source.sm}`
        : "/img/inventory/def.jpg",

    subTotal() {
      if (!this.loaded) {
        return 0
      }

      var subTotal = 0
      for (var i = 0; i < this.$refs.items.length; i++) {
        subTotal += this.$refs.items[i].subTotal
      }
      return subTotal
    }
  },

  components: {
    item: require("./offerItem.vue")
  },

  created() {
    this.$http.get(`offer/${this.id}`).then(function(response) {
      this.$set("offer", response.data)
      this.loaded = true
    })
  },

  props: ["id"]
}
</script>
