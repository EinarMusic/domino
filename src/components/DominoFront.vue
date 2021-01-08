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
		<DotBoard />
		<PlayerBoard />
		<RemoveP />
		<ControlBoard />
	</div>
</template>

<script>
import DotBoard from "./DotBoard";
import ControlBoard from "./ControlBoard";
import PlayerBoard from "./PlayerBoard";
import RemoveP from "./RemoveP";

export default {
	components: { DotBoard, ControlBoard, PlayerBoard, RemoveP },
};
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0px;
	padding: 0px;

	font-family: "Montserrat", sans-serif;
	letter-spacing: -0.2px;
	font-size: 16px;
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
