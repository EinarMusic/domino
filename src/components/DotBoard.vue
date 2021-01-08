<template>
	<div>
		<div class="grid-container-- ranie">
			<div class="boarPlayer total">{{ total }}</div>
			<div class="boarPlayer total">Total</div>
			<div class="boarPlayer total">{{ total2 }}</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState(["total", "total2"]),
	},
};
</script>

<style>
* {
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
}

.ranie {
	display: grid;
	grid-template-columns: auto auto auto;

	border-radius: 0px 0px 10px 10px;
	background: #e54e4e;
	width: 100%;

	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
	margin-bottom: 10px;
}

.boarPlayer {
	border: none;
	padding: 3px;
	font-size: 30px;
	text-align: center;
	color: #dddddd;
}

.total {
	color: #dddddd;
}
</style>
