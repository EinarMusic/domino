import Vue from "vue";
import VouRouter from "vue-router";

import DominoFront from "../components/DominoFront";
import DotBoard from "../components/DotBoard";
import controlBoard from "../components/ControlBoard";
import PlayerBoard from "../components/PlayerBoard";
import RemoveP from "../components/RemoveP";
import Forms from "../components/Forms";
import VueRouter from "vue-router";

Vue.use(VouRouter);

export default new VueRouter({
	mode: "history",
	routes: [
		{ path: "/", component: DominoFront },
		{ path: "/DotBoard", component: DotBoard },
		{ path: "/control", component: controlBoard },
		{ path: "/PlayerBoard", component: PlayerBoard },
		{ path: "/RemoveP", component: RemoveP },
		{ path: "/Forms", component: Forms },
		{ path: "*", redirect: "/" },
	],
});
