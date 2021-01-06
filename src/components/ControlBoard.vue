<template>
	<div class="grid-container-control sele">
		<select v-on:change="pointnAndTotal1" class="grid-item-control Select1">
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
		<div class="grid-item-control mas">+</div>
		<select v-on:change="pointnAndTotal2" class="grid-item-control Select1">
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
}

.sele {
	margin-top: 20px;
}
.grid-item-control {
	background: #30475e;
	border: none;
	padding: 3px;
	font-size: 30px;
	text-align: center;
	color: #dddddd;
}

.mas {
	background: #30475e;
	text-align: center;
}

.Select1 {
	background-color: #e54e4e;
	cursor: pointer;
}
</style>
