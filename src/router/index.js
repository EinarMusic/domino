import Vue from "vue";
import VouRouter from "vue-router";

import Header from "../components/HeaderForName";
import Player2 from "../components/BoardPlayer-2";
import controlBoard from "../components/ControlBoard";
import tablePlayer2 from "../components/TablePlayer2";
import VueRouter from "vue-router";

Vue.use(VouRouter);

export default new VueRouter({
	mode: "history",
	routes: [
		{ path: "/", component: Header },
		{ path: "/player2", component: Player2 },
		{ path: "/control", component: controlBoard },
		{ path: "/tableplayer", component: tablePlayer2 },
		{ path: "*", redirect: "/" },
	],
});
