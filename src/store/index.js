import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let testData = [];

for (let i = 1; i <= 5; i++) {
	testData.push(i);
}

export default new Vuex.Store({
	strict: true,
	state: {
		list: testData,
		point: [],
		point2: [],
		total: 0,
		total2: 0,
	},
	getters: {
		tableTotal: (state) => {
			let show = state.point.length;
			return state.point[show - 1];
		},
	},
	mutations: {
		getPointPlayer1(state, value) {
			state.point.push(value);
			state.total += value;
			if (state.point.length > state.point2.length) {
				return state.point2.push(0);
			}
		},
		getPointPlayer2(state, value) {
			state.point2.push(value);
			state.total2 += value;
			if (state.point2.length > state.point.length) {
				return state.point.push(0);
			}
		},
	},
});
