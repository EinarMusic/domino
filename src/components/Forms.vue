<template>
	<div class="con">
		<form>
			<label>
				<p style="color: #222831">Teams</p>
				<input class="form" type="text" placeholder="First Team" />
			</label>
			<label>
				<input class="form" type="text" placeholder="Second Team" />
			</label>

			<label>
				<p style="color: #222831">Points per Game</p>
				<select class="sele-game" style="width: 20%">
					<option value="100">100</option>
					<option value="200">200</option>
					<option value="300">300</option>
					<option value="400">400</option>
					<option value="500">500</option>
				</select>
			</label>

			<button class="red" type="button" style="outline:none">Save</button>
		</form>
	</div>
</template>

<script>
export default {};
</script>

<style>
.con {
	display: flex;
	justify-content: center;
	align-content: center;
	border: 1px solid red;
	height: 100vh;
}

form {
	font-family: "Montserrat", sans-serif;
	letter-spacing: -0.2px;
	font-size: 16px;
	max-width: 500px;
}

form {
	padding: 16px;
	width: 16px * 2;
	margin: 0 auto;
}

::placeholder {
	color: #61677c;
	opacity: 1; /* Firefox */
}

button,
.form {
	border: 0;
	outline: 0;
	font-size: 16px;
	border-radius: 16px;
	padding: 16px;
	background-color: #ebecf0;
	text-shadow: 1px 1px 0 #fff;
}

label {
	display: block;

	width: 100%;
	margin-top: 20px;
}

.form {
	margin-right: 16px;
	box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
	width: 100%;
	box-sizing: border-box;
	transition: all 0.2s ease-in-out;
	appearance: none;
	-webkit-appearance: none;
}

.form:focus {
	box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}

.red {
	color: #61677c;
	font-weight: bold;
	box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	font-weight: 600;
}

.red:hover {
	box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
}

.red:active {
	box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}

.red {
	display: block;
	width: 100%;
	color: #e54e4e;
	border-radius: 16px;
	margin-top: 20px;
}

.sele-game {
	margin-right: 16px;
	box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
	width: 100%;
	box-sizing: border-box;
	transition: all 0.2s ease-in-out;
	appearance: none;
	-webkit-appearance: none;

	border: 0;
	outline: 0;
	font-size: 16px;
	border-radius: 16px;
	padding: 16px;
	background-color: #ebecf0;
	text-shadow: 1px 1px 0 #fff;

	color: #babecc;
}

.sele-game:focus {
	box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}
</style>
