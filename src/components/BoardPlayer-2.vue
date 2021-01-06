<template>
	<div>
		<div class="grid-container-- ranie">
			<div class="grid-item- total">{{ total }}</div>
			<div class="grid-item- total">Total</div>
			<div class="grid-item- total">{{ total2 }}</div>
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
	width: 100%;
}

.grid-item- {
	border: none;
	padding: 3px;
	font-size: 30px;
	text-align: center;
	color: #dddddd;
}

.total {
	background: #30475e;
	color: #dddddd;
}
</style>
