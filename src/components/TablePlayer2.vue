<template>
	<div class="container-1">
		<table>
			<tr v-for="p in point" v-bind:key="p.id">
				<td>
					{{ p }}
				</td>
			</tr>
		</table>

		<table>
			<tr v-for="p2 in point2" v-bind:key="p2.id">
				<td>
					{{ p2 }}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	computed: { ...mapState(["point", "point2"]) },
};
</script>

<style>
.container-1 {
	display: flex;
}

table {
	width: 100%;
}

td {
	border: 1px solid #dddddd;
	text-align: center;
	padding: 8px;
}
</style>
