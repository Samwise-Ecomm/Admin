<template>
<div class="row">
	<div class="col-xs-12">
		<offer-info :offer="offer"></offer-info>
	</div>

	<div class="col-xs-12">
		<items :offer="offer"></items>
	</div>

	<div class="col-xs-12 col-md-6">
		<tags :tag-string.sync="offer.tags"></tags>

		<picture-upload :offer-id="offer.id"></picture-upload>

		<pictures v-if="offer.pictures.length > 0"
			:pictures="offer.pictures"
			:deleted="offer.deleted_pictures"
			:offer-id="offer.id">
		</pictures>
	</div>
	<div class="col-xs-12 col-md-6">
		<type-info :offer="offer"></type-info>
	</div>

	<div class="col-xs-12">
		<div class="col-md-4 col-xs-12">
			<button class="btn btn-sm btn-block btn-primary" id="save-item" @click="store">
				<status-icon icon="fa-floppy-o" v-ref:store></status-icon> Save Offer
			</button>
		</div>

		<div class="col-md-4 col-xs-12">
			<confirmed-button icon="fa-repeat"
				v-if="offer.id"
				text="Discard Changes"
				color="btn-info"
				:action="discard"
				v-ref:discard>
			</confirmed-button>
		</div>

		<div class="col-md-4 col-xs-12">
			<confirmed-button icon="fa-trash"
				text="Delete Offer"
				color="btn-danger"
				:action="delete"
				v-ref:delete>
			</confirmed-button>
		</div>
	</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      offer: {
        name: "",
        type: "auto",
        public: 1,
        description: "",
        tags: "",
        items: [
          {
            name: "",
            type: "auto",
            public: 1,
            x: "",
            y: "",
            z: "",
            weight: "",
            shipping_cost: "",
            location: "",
            unit: "Unit",
            infinite: false,
            stock: 0,
            store_reserve: 0,
            sold: 0,
            price: 0
          }
        ],
        pictures: [],
        deleted_pictures: [],
        deleted_items: []
      }
    }
  },

  components: {
    items: require("~/components/offer/items/box.vue"),
    offerInfo: require("~/components/offer/offerInfo.vue"),
    tags: require("~/components/tags.vue"),
    pictureUpload: require("~/components/offer/pictureUpload.vue"),
    pictures: require("~/components/offer/pictures.vue"),
    typeInfo: require("~/components/offer/typeInfo.vue"),
    confirmedButton: require("~/components/confirmedButton.vue"),
    statusIcon: require("~/components/statusIcon.vue")
  },

  events: {
    NEW_PICTURE(fileName) {
      this.offer.pictures.push({
        id: null,
        source: {
          lg: `tmp/${fileName}`
        }
      })
    }
  },

  methods: {
    store() {
      this.$refs.store.working()

      this.$http.post("offer", this.offer).then(
        response => {
          this.$router.go({ path: `/offer/${response.data.id}` })
        },
        () => {
          this.$refs.store.fail()
        }
      )
    },

    delete() {
      this.$router.go({ path: "/offers" })
    }
  }
}
</script>
