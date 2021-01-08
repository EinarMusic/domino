<template>
	<div class="wrap-remove">
		<span class="removeP" v-on:click="removePoint()">Delete</span>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: { ...mapState(["point2", "point"]) },
	methods: {
		removePoint() {
			this.point.splice(-1);
			this.point2.splice(-1);
		},
	},
};
</script>

<style>
.removeP {
	text-align: center;
	color: #dddddd;
	font-weight: 900;
	padding: 7px 70px;

	background: #222831;
	border-radius: 20px;
	cursor: pointer;

	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
}

.wrap-remove {
	display: flex;
	justify-content: center;
	margin-top: 10px;
}
</style>
