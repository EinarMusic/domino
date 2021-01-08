<template>
	<div class="grid-container-control sele">
		<div class="wrap-select">
			<select
				v-on:change="pointnAndTotal1"
				class="grid-item-control Select1 si"
			>
				<option>Point</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
				<option>9</option>
				<option>10</option>
			</select>
		</div>
		<div class="grid-item-control mas">+</div>
		<div class="wrap-select">
			<select
				v-on:change="pointnAndTotal2"
				class="grid-item-control Select1 no"
			>
				<option>Point</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
				<option>9</option>
				<option>10</option>
			</select>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
	computed: { ...mapState(["point", "point2"]) },
	methods: {
		...mapMutations(["getPointPlayer1", "getPointPlayer2"]),
		pointnAndTotal1($event) {
			this.getPointPlayer1(Number($event.target.value));
		},
		pointnAndTotal2($event) {
			this.getPointPlayer2(Number($event.target.value));
		},
		showTable() {},
	},
};
</script>

<style>
* {
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
}

.grid-container-control {
	display: grid;
	grid-template-columns: auto auto auto;

	margin-top: 10px;

	background-color: #e54e4e;
	border-radius: 26px;

	-webkit-box-shadow: 0 8px 6px -6px black;
	-moz-box-shadow: 0 8px 6px -6px black;
	box-shadow: 0 8px 6px -6px black;
}
.grid-item-control {
	border: none;
	padding: 3px;
	color: #dddddd;
}

.mas {
	background: #30475e;
	border-radius: 10px;

	text-align: center;
	font-size: 20px;
	font-weight: 900;
}

.Select1 {
	background-color: #e54e4e;
	cursor: pointer;

	font-weight: 600;
	font-size: 20px;

	outline: none;
}

.wrap-select {
	padding: 7px 10px;

	text-align: center;
}
</style>
