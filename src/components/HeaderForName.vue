<template>
	<div>
		<div class="header">
			<div class="text-center">
				<p class="players">Ranie</p>
			</div>
			<div class="text-center">
				<p class="players">Other</p>
			</div>
		</div>
		<BoarPlayer />
		<tablePlayer />
		<ControlBoard />
	</div>
</template>

<script>
import BoarPlayer from "./BoardPlayer-2";
import ControlBoard from "./ControlBoard";
import tablePlayer from "./TablePlayer2";

export default {
	components: { BoarPlayer, ControlBoard, tablePlayer },
};
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0px;
	padding: 0px;
}

.header {
	background-color: #222831;
	display: grid;
	grid-template-columns: auto auto;
	width: 100%;
}

.players {
	color: #dddddd;

	font-family: sans-serif;
	font-weight: 600;
	font-size: 25px;

	margin-top: 10px;
}

.point-board {
	margin-top: 10px;
}
</style>
